const express = require("express");
const Packing = require("../models/PackingSchema"); // Import schema
const router = express.Router();

// POST API to send packing data
router.post("/sendPackagingData", async (req, res) => {
  try {
    const packingData = new Packing(req.body);
    console.log('heljeiej')
    const savedPacking = await packingData.save();
    res.status(201).json(savedPacking);
  } catch (error) {
    res.status(500).json({ error: "Error saving packing data", details: error });
  }
});

// GET API to fetch all packing data
router.get("/getPackagingData", async (req, res) => {
  try {
    const allPacking = await Packing.find();
    res.status(200).json(allPacking);
  } catch (error) {
    res.status(500).json({ error: "Error fetching packing data", details: error });
  }
});

module.exports = router;
