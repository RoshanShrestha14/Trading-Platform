const { HoldingsModel } = require("../models/holdingsModel");


module.exports.Holdings =  async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch holdings",
    });
  }
};

module.exports.HoldingsNew = async (req, res) => {
  try {
    const { name, qty, avg, price, net, day } = req.body;
    // validation
    if (!name || !qty || !avg || !price || !net || !day) {
      return res.status(400).json({
        success: false,
        error: "All fields are required: name, qty, price, mode",
      });
    }
    // save or create
    const newHoldings = new HoldingsModel({
      name: name,
      qty: qty,
      avg: avg,
      price: price,
      net: net,
      day: day,
    });
    await newHoldings.save();
    res.status(201).json({
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({
      success: true,
      error: "Failed to fetch Order",
    });
  }
};

