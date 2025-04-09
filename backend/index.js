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
    const { rank, category, gender, district, branch, page = 1 } = req.body;
    const limit = 15;
    const skip = (page - 1) * limit;

    // Build query based on category and gender
    const query = {};
    if (category === 'general') {
      query[gender === 'male' ? 'OCBOYS' : 'OCGIRLS'] = { $gte: rank };
    } else if (category === 'sc') {
      query[gender === 'male' ? 'SCBOYS' : 'SCGIRLS'] = { $gte: rank };
    } else if (category === 'st') {
      query[gender === 'male' ? 'STBOYS' : 'STGIRLS'] = { $gte: rank };
    } else if (category === 'bca') {
      query[gender === 'male' ? 'BCABOYS' : 'BCAGIRLS'] = { $gte: rank };
    } else if (category === 'bcb') {
      query[gender === 'male' ? 'BCBBOYS' : 'BCBGIRLS'] = { $gte: rank };
    } else if (category === 'bcc') {
      query[gender === 'male' ? 'BCCBOYS' : 'BCCGIRLS'] = { $gte: rank };
    } else if (category === 'bcd') {
      query[gender === 'male' ? 'BCDBOYS' : 'BCDGIRLS'] = { $gte: rank };
    } else if (category === 'bce') {
      query[gender === 'male' ? 'BCEBOYS' : 'BCEGIRLS'] = { $gte: rank };
    }

    // Add district filter if provided
    if (district && district !== 'all') {
      query.DIST = district;
    }

    // Add branch filter if provided
    if (branch && branch !== 'all') {
      query.BRANCH_CODE = branch;
    }

    // Get total count for pagination
    const totalColleges = await College.countDocuments(query);
    const totalPages = Math.ceil(totalColleges / limit);

    // Get colleges with pagination
    const colleges = await College.find(query)
      .select('INST_CODE INST_NAME TYPE DIST PLACE COED BRANCH_CODE OCBOYS OCGIRLS SCBOYS SCGIRLS STBOYS STGIRLS BCABOYS BCAGIRLS BCBBOYS BCBGIRLS BCCBOYS BCCGIRLS BCDBOYS BCDGIRLS BCEBOYS BCEGIRLS COLLFEE')
      .sort(gender === 'male' ? 
        (category === 'general' ? { OCBOYS: 1 } : 
         category === 'sc' ? { SCBOYS: 1 } :
         category === 'st' ? { STBOYS: 1 } :
         category === 'bca' ? { BCABOYS: 1 } :
         category === 'bcb' ? { BCBBOYS: 1 } :
         category === 'bcc' ? { BCCBOYS: 1 } :
         category === 'bcd' ? { BCDBOYS: 1 } :
         { BCEBOYS: 1 }) :
        (category === 'general' ? { OCGIRLS: 1 } :
         category === 'sc' ? { SCGIRLS: 1 } :
         category === 'st' ? { STGIRLS: 1 } :
         category === 'bca' ? { BCAGIRLS: 1 } :
         category === 'bcb' ? { BCBGIRLS: 1 } :
         category === 'bcc' ? { BCCGIRLS: 1 } :
         category === 'bcd' ? { BCDGIRLS: 1 } :
         { BCEGIRLS: 1 }))
      .skip(skip)
      .limit(limit);

    // Transform the response
    const transformedColleges = colleges.map(college => {
      const transformedCollege = {
        institution_code: college.INST_CODE,
        institution_name: college.INST_NAME,
        type: college.TYPE,
        district: college.DIST,
        place: college.PLACE,
        coed: college.COED,
        branch_code: college.BRANCH_CODE,
        cutoff_rank: gender === 'male' ? 
          (category === 'general' ? college.OCBOYS :
           category === 'sc' ? college.SCBOYS :
           category === 'st' ? college.STBOYS :
           category === 'bca' ? college.BCABOYS :
           category === 'bcb' ? college.BCBBOYS :
           category === 'bcc' ? college.BCCBOYS :
           category === 'bcd' ? college.BCDBOYS :
           college.BCEBOYS) :
          (category === 'general' ? college.OCGIRLS :
           category === 'sc' ? college.SCGIRLS :
           category === 'st' ? college.STGIRLS :
           category === 'bca' ? college.BCAGIRLS :
           category === 'bcb' ? college.BCBGIRLS :
           category === 'bcc' ? college.BCCGIRLS :
           category === 'bcd' ? college.BCDGIRLS :
           college.BCEGIRLS),
        college_fee: college.COLLFEE,
        cutoff_category: category.toUpperCase()
      };

      // Remove any undefined or null values
      Object.keys(transformedCollege).forEach(key => {
        if (transformedCollege[key] === undefined || transformedCollege[key] === null) {
          delete transformedCollege[key];
        }
      });

      return transformedCollege;
    });

    res.json({
      message: `Found ${totalColleges} colleges matching your criteria (showing ${skip + 1}-${Math.min(skip + limit, totalColleges)})`,
      colleges: transformedColleges,
      currentPage: page,
      totalPages,
      totalColleges,
      hasMore: page < totalPages
    });
  } catch (error) {
    console.error('Error in predict endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
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
