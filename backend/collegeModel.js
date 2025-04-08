const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  inst_code: String,
  inst_name: String,
  type: String,
  district: String,
  place: String,
  coed: String,
  branch_code: String,
  OC_BOYS: Number,
  OC_GIRLS: Number,
  SC_BOYS: Number,
  SC_GIRLS: Number,
  ST_BOYS: Number,
  ST_GIRLS: Number,
  BCA_BOYS: Number,
  BCA_GIRLS: Number,
  BCB_BOYS: Number,
  BCB_GIRLS: Number,
  BCC_BOYS: Number,
  BCC_GIRLS: Number,
  BCD_BOYS: Number,
  BCD_GIRLS: Number,
  BCE_BOYS: Number,
  BCE_GIRLS: Number,
  OC_EWS_BOYS: Number,
  OC_EWS_GIRLS: Number,
  COLLFEE: Number
});

module.exports = mongoose.model("College", collegeSchema);
