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
    console.log('Reading JSON file...');
    const jsonData = JSON.parse(fs.readFileSync('./data/college_cutoffs.json', 'utf8'));
    console.log(`Found ${jsonData.length} colleges in JSON file`);
    
    // Log first college for verification
    console.log('\nSample college data:');
    console.log(JSON.stringify(jsonData[0], null, 2));
    
    // Clear existing data
    await College.deleteMany({});
    console.log('Existing data cleared');

    // Insert new data
    console.log('\nInserting colleges...');
    const result = await College.insertMany(jsonData, { ordered: false });
    console.log(`✅ Successfully imported ${result.length} college records`);

    // Verify data
    const count = await College.countDocuments();
    console.log(`\nVerification: ${count} colleges in database`);
    
    const sampleCollege = await College.findOne();
    console.log('\nSample college from database:');
    console.log(JSON.stringify(sampleCollege, null, 2));

    // Close the connection
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  } catch (error) {
    console.error('Error importing data:', error);
    if (error.writeErrors) {
      console.error('\nWrite Errors:', error.writeErrors[0].err);
    }
    process.exit(1);
  }
};

importData(); 