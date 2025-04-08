const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const College = require('./collegeModel');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Read and parse JSON file
const importData = async () => {
  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync('./college_cutoffs.json', 'utf8'));
    
    // Clear existing data
    await College.deleteMany({});
    console.log('Existing data cleared');

    // Insert new data
    const result = await College.insertMany(jsonData);
    console.log(`✅ Successfully imported ${result.length} college records`);

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData(); 