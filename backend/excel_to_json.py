import pandas as pd

# Read the Excel file
df = pd.read_excel("./data/cutoffs.xlsx")

# Print original column names for debugging
print("Original columns in Excel file:")
print(df.columns.tolist())

# Clean column names
df.columns = df.columns.str.replace('\n', '').str.strip().str.upper().str.replace(" ", "")

# Print cleaned column names
print("\nCleaned column names:")
print(df.columns.tolist())

# Map Excel column names to our required names
column_mapping = {
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
}

# Rename columns
df = df.rename(columns=column_mapping)

# Required columns (based on your schema)
required_cols = [
    'INST_CODE', 'INST_NAME', 'TYPE', 'DIST', 'PLACE', 'COED', 'BRANCH_CODE',
    'OCBOYS', 'OCGIRLS', 'SCBOYS', 'SCGIRLS', 'STBOYS', 'STGIRLS',
    'BCABOYS', 'BCAGIRLS', 'BCBBOYS', 'BCBGIRLS', 'BCCBOYS', 'BCCGIRLS',
    'BCDBOYS', 'BCDGIRLS', 'BCEBOYS', 'BCEGIRLS', 'OCEWSBOYS', 'OCEWSGIRLS',
    'COLLFEE'
]

# Print any missing columns
missing_cols = [col for col in required_cols if col not in df.columns]
if missing_cols:
    print("\nMissing columns:")
    print(missing_cols)

# Fill missing columns with null (None)
for col in required_cols:
    if col not in df.columns:
        df[col] = None

# Select only the required columns
df = df[required_cols]

# Convert rank columns to numeric, replacing any non-numeric values with None
rank_columns = [
    'OCBOYS', 'OCGIRLS', 'SCBOYS', 'SCGIRLS', 'STBOYS', 'STGIRLS',
    'BCABOYS', 'BCAGIRLS', 'BCBBOYS', 'BCBGIRLS', 'BCCBOYS', 'BCCGIRLS',
    'BCDBOYS', 'BCDGIRLS', 'BCEBOYS', 'BCEGIRLS', 'OCEWSBOYS', 'OCEWSGIRLS'
]

for col in rank_columns:
    df[col] = pd.to_numeric(df[col], errors='coerce')

# Save as JSON
df.to_json("./data/college_cutoffs.json", orient="records", indent=2)
print("\n✅ JSON created as './data/college_cutoffs.json'")
