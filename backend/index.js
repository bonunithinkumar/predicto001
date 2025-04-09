const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const College = require("./collegeModel");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Category mapping
const CATEGORY_MAPPING = {
  'general': ['OC'],
  'obc': ['BCA', 'BCB', 'BCC', 'BCD', 'BCE'],
  'sc': ['SC'],
  'st': ['ST'],
  'ews': ['OC_EWS']
};

// Get all colleges with pagination
app.get("/colleges", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const colleges = await College.find()
      .skip(skip)
      .limit(limit)
      .select('inst_name type district place branch_code');

    const total = await College.countDocuments();

    res.json({
      colleges,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalColleges: total
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving colleges", error: err.message });
  }
});

// Get college details by ID
app.get("/colleges/:id", async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json(college);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving college details", error: err.message });
  }
});

// Search colleges
app.get("/search", async (req, res) => {
  try {
    const { query, type, district } = req.query;
    let searchQuery = {};

    if (query) {
      searchQuery.inst_name = { $regex: query, $options: 'i' };
    }
    if (type) {
      searchQuery.type = type;
    }
    if (district) {
      searchQuery.district = district;
    }

    const colleges = await College.find(searchQuery)
      .select('inst_name type district place branch_code')
      .limit(20);

    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: "Error searching colleges", error: err.message });
  }
});

// Predict colleges based on rank and category
app.post("/predict", async (req, res) => {
  try {
    const { rank, category, gender, page = 1 } = req.body;
    const limit = 15; // Number of colleges per page
    const skip = (parseInt(page) - 1) * limit;
    
    if (!rank || !category || !gender) {
      return res.status(400).json({ 
        message: "Missing required fields: rank, category, and gender are required" 
      });
    }

    // Get the category prefixes based on input category
    const categoryPrefixes = CATEGORY_MAPPING[category.toLowerCase()];

    if (!categoryPrefixes) {
      return res.status(400).json({ 
        message: "Invalid category. Must be one of: general, obc, sc, st, ews" 
      });
    }

    // Construct the query for all relevant category fields
    const genderSuffix = gender.toUpperCase() === 'MALE' ? '_BOYS' : '_GIRLS';
    
    // Create an OR query for all applicable categories
    const orConditions = categoryPrefixes.map(prefix => ({
      [`${prefix}${genderSuffix}`]: { $gte: parseInt(rank) }
    }));

    // Get total count for pagination
    const totalColleges = await College.countDocuments({ $or: orConditions });
    const totalPages = Math.ceil(totalColleges / limit);

    // Find colleges that match any of the category conditions with pagination
    const colleges = await College.find({ $or: orConditions })
      .select(`
        inst_name 
        type 
        district 
        place 
        branch_code 
        COLLFEE 
        ${categoryPrefixes.map(prefix => `${prefix}${genderSuffix}`).join(' ')}
      `)
      .sort({ [`${categoryPrefixes[0]}${genderSuffix}`]: 1 })
      .skip(skip)
      .limit(limit);

    // Transform the results to include the best matching cutoff
    const transformedColleges = colleges.map(college => {
      const doc = college.toObject();
      
      // Find the best (lowest) cutoff rank among applicable categories
      const cutoffs = categoryPrefixes.map(prefix => ({
        category: prefix,
        cutoff: doc[`${prefix}${genderSuffix}`]
      })).filter(c => c.cutoff != null);

      const bestCutoff = cutoffs.reduce((best, current) => 
        !best || (current.cutoff < best.cutoff) ? current : best
      , null);

      return {
        ...doc,
        cutoff_category: bestCutoff ? bestCutoff.category : null,
        cutoff_rank: bestCutoff ? bestCutoff.cutoff : null
      };
    });

    if (transformedColleges.length === 0) {
      return res.json({
        message: "No colleges found matching your criteria",
        colleges: [],
        currentPage: parseInt(page),
        totalPages: 0,
        totalColleges: 0,
        hasMore: false
      });
    }

    res.json({
      message: `Found ${totalColleges} colleges matching your criteria (showing ${skip + 1}-${Math.min(skip + limit, totalColleges)})`,
      colleges: transformedColleges,
      currentPage: parseInt(page),
      totalPages,
      totalColleges,
      hasMore: parseInt(page) < totalPages
    });

  } catch (err) {
    console.error('Prediction error:', err);
    res.status(500).json({ 
      message: "Error predicting colleges", 
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something went wrong!", 
    error: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
