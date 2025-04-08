import pandas as pd

df = pd.read_excel("../cutoffs.xlsx")

# Clean column names
df.columns = df.columns.str.replace('\n', '').str.strip().str.upper().str.replace(" ", "")

# Required columns (based on your schema)
required_cols = [
    'INST_CODE', 'INST_NAME', 'TYPE', 'DIST', 'PLACE', 'COED', 'BRANCH_CODE',
    'OCBOYS', 'OCGIRLS', 'SCBOYS', 'SCGIRLS', 'STBOYS', 'STGIRLS',
    'BCABOYS', 'BCAGIRLS', 'BCBBOYS', 'BCBGIRLS', 'BCCBOYS', 'BCCGIRLS',
    'BCDBOYS', 'BCDGIRLS', 'BCEBOYS', 'BCEGIRLS', 'OCEWSBOYS', 'OCEWSGIRLS',
    'COLLFEE'
]

# Fill missing columns with null (None)
for col in required_cols:
    if col not in df.columns:
        df[col] = None

df = df[required_cols]

# Save as JSON
df.to_json("college_cutoffs.json", orient="records", indent=2)
print("✅ JSON created as 'college_cutoffs.json'")
