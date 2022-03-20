const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: String, required: true },
    currentBatch: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentSchema);
