const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  INST_CODE: String,
  INST_NAME: String,
  TYPE: String,
  DIST: String,
  PLACE: String,
  COED: String,
  BRANCH_CODE: String,
  OCBOYS: Number,
  OCGIRLS: Number,
  SCBOYS: Number,
  SCGIRLS: Number,
  STBOYS: Number,
  STGIRLS: Number,
  BCABOYS: Number,
  BCAGIRLS: Number,
  BCBBOYS: Number,
  BCBGIRLS: Number,
  BCCBOYS: Number,
  BCCGIRLS: Number,
  BCDBOYS: Number,
  BCDGIRLS: Number,
  BCEBOYS: Number,
  BCEGIRLS: Number,
  OCEWSBOYS: Number,
  OCEWSGIRLS: Number,
  COLLFEE: Number
}, {
  strict: true // This ensures only fields defined in the schema are saved
});

// Create indexes for commonly queried fields
collegeSchema.index({ OCBOYS: 1 });
collegeSchema.index({ OCGIRLS: 1 });
collegeSchema.index({ DIST: 1 });
collegeSchema.index({ BRANCH_CODE: 1 });

module.exports = mongoose.model("College", collegeSchema);
