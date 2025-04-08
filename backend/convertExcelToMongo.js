const xlsx = require('xlsx');
const mongoose = require('mongoose');
const College = require('./collegeModel');
require('dotenv').config();

async function convertAndImport() {
  try {
    // Read the Excel file
    const workbook = xlsx.readFile('../cutoffs.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    
    // Transform data to match our schema
    const transformedData = jsonData.map(item => {
      // Clean up the institute name by removing extra spaces
      const inst_name = item['                                              inst_name'] || item.inst_name;
      
      return {
        inst_code: item.inst_code,
        inst_name: inst_name ? inst_name.trim() : null,
        type: item.type,
        district: item.DIST,
        place: item.PLACE,
        coed: item.COED,
        branch_code: item['branch_\r\ncode'],
        OC_BOYS: parseFloat(item['OC_BO\r\nYS']) || null,
        OC_GIRLS: parseFloat(item['OC_GIR\r\nLS']) || null,
        SC_BOYS: parseFloat(item['SC_BO\r\nYS']) || null,
        SC_GIRLS: parseFloat(item['SC_GIR\r\nLS']) || null,
        ST_BOYS: parseFloat(item['ST_BOY\r\nS']) || null,
        ST_GIRLS: parseFloat(item['ST_GIR\r\nLS']) || null,
        BCA_BOYS: parseFloat(item['BCA_B\r\nOYS']) || null,
        BCA_GIRLS: parseFloat(item['BCA_GI\r\nRLS']) || null,
        BCB_BOYS: parseFloat(item['BCB_B\r\nOYS']) || null,
        BCB_GIRLS: parseFloat(item['BCB_GI\r\nRLS']) || null,
        BCC_BOYS: parseFloat(item['BCC_B\r\nOYS']) || null,
        BCC_GIRLS: parseFloat(item['BCC_GI\r\nRLS']) || null,
        BCD_BOYS: parseFloat(item['BCD_B\r\nOYS']) || null,
        BCD_GIRLS: parseFloat(item['BCD_GI\r\nRLS']) || null,
        BCE_BOYS: parseFloat(item['BCE_B\r\nOYS']) || null,
        BCE_GIRLS: parseFloat(item['BCE_GI\r\nRLS']) || null,
        OC_EWS_BOYS: parseFloat(item['OC_EWS_B\r\nOYS']) || null,
        OC_EWS_GIRLS: parseFloat(item['OC_EWS_GI\r\nRLS']) || null,
        COLLFEE: parseFloat(item.COLLFEE) || null
      };
    });

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await College.deleteMany({});
    console.log('Existing data cleared');

    // Import new data
    const result = await College.insertMany(transformedData);
    console.log(`✅ Successfully imported ${result.length} college records`);

    // Log a sample record to verify the data
    const sampleRecord = await College.findOne({ OC_BOYS: { $ne: null } });
    console.log('\nSample record with rank data:', JSON.stringify(sampleRecord, null, 2));

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

convertAndImport(); 