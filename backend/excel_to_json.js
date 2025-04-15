const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Function to clean column names
function cleanColumnName(name) {
    return name.replace('\n', '').trim().toUpperCase().replace(' ', '');
}

// Column mapping
const columnMapping = {
    'OC_BOYS': 'OCBOYS',
    'OC_GIRLS': 'OCGIRLS',
    'SC_BOYS': 'SCBOYS',
    'SC_GIRLS': 'SCGIRLS',
    'ST_BOYS': 'STBOYS',
    'ST_GIRLS': 'STGIRLS',
    'BCA_BOYS': 'BCABOYS',
    'BCA_GIRLS': 'BCAGIRLS',
    'BCB_BOYS': 'BCBBOYS',
    'BCB_GIRLS': 'BCBGIRLS',
    'BCC_BOYS': 'BCCBOYS',
    'BCC_GIRLS': 'BCCGIRLS',
    'BCD_BOYS': 'BCDBOYS',
    'BCD_GIRLS': 'BCDGIRLS',
    'BCE_BOYS': 'BCEBOYS',
    'BCE_GIRLS': 'BCEGIRLS',
    'OC_EWS_BOYS': 'OCEWSBOYS',
    'OC_EWS_GIRLS': 'OCEWSGIRLS'
};

// Required columns
const requiredCols = [
    'INST_CODE', 'INST_NAME', 'TYPE', 'DIST', 'PLACE', 'COED', 'BRANCH_CODE',
    'OCBOYS', 'OCGIRLS', 'SCBOYS', 'SCGIRLS', 'STBOYS', 'STGIRLS',
    'BCABOYS', 'BCAGIRLS', 'BCBBOYS', 'BCBGIRLS', 'BCCBOYS', 'BCCGIRLS',
    'BCDBOYS', 'BCDGIRLS', 'BCEBOYS', 'BCEGIRLS', 'OCEWSBOYS', 'OCEWSGIRLS',
    'COLLFEE'
];

// Rank columns for numeric conversion
const rankColumns = [
    'OCBOYS', 'OCGIRLS', 'SCBOYS', 'SCGIRLS', 'STBOYS', 'STGIRLS',
    'BCABOYS', 'BCAGIRLS', 'BCBBOYS', 'BCBGIRLS', 'BCCBOYS', 'BCCGIRLS',
    'BCDBOYS', 'BCDGIRLS', 'BCEBOYS', 'BCEGIRLS', 'OCEWSBOYS', 'OCEWSGIRLS'
];

function convertExcelToJson() {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile('./data/cutoffs.xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert to JSON
        let data = XLSX.utils.sheet_to_json(worksheet);

        // Print original column names
        console.log("Original columns in Excel file:");
        console.log(Object.keys(data[0]));

        // Clean and map column names
        data = data.map(row => {
            const newRow = {};
            Object.entries(row).forEach(([key, value]) => {
                const cleanKey = cleanColumnName(key);
                const mappedKey = columnMapping[cleanKey] || cleanKey;
                newRow[mappedKey] = value;
            });
            return newRow;
        });

        // Print cleaned column names
        console.log("\nCleaned column names:");
        console.log(Object.keys(data[0]));

        // Check for missing columns
        const missingCols = requiredCols.filter(col => !Object.keys(data[0]).includes(col));
        if (missingCols.length > 0) {
            console.log("\nMissing columns:");
            console.log(missingCols);
        }

        // Fill missing columns with null and ensure only required columns
        data = data.map(row => {
            const newRow = {};
            requiredCols.forEach(col => {
                newRow[col] = row[col] || null;
            });
            return newRow;
        });

        // Convert rank columns to numeric
        data = data.map(row => {
            rankColumns.forEach(col => {
                row[col] = row[col] ? Number(row[col]) : null;
                if (isNaN(row[col])) row[col] = null;
            });
            return row;
        });

        // Save as JSON
        fs.writeFileSync(
            './data/college_cutoffs.json',
            JSON.stringify(data, null, 2)
        );

        console.log("\n✅ JSON created as './data/college_cutoffs.json'");
    } catch (error) {
        console.error("Error converting Excel to JSON:", error);
    }
}

// Run the conversion
convertExcelToJson();
