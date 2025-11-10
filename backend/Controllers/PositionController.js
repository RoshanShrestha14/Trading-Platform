const { positionsModel } = require("../models/positionsModel");

module.exports.Position = async (req, res) => {
  try {
    let allPositions = await positionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch holdings",
    });
  }
};
