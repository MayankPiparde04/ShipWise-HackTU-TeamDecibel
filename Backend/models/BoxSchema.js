const mongoose = require("mongoose");

const BoxSchema = new mongoose.Schema({
  box_name: { type: String, required: true },  // Box Name
  length: { type: Number, required: true },  // in inches
  breadth: { type: Number, required: true },  // in inches
  height: { type: Number, required: true },  // in inches
  max_weight: { type: Number, required: true },  // in kg
  quantity: { type: Number, required: true },  // Quantity of boxes
});


// Ensure that the box name is unique and prevent adding boxes with the same name
boxSchema.index({ boxName: 1 }, { unique: true });

module.exports = mongoose.model("BoxData", boxSchema);
