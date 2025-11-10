const { ordersModel } = require("../models/ordersModel");


module.exports.NewOrders = async (req, res) => {
  try {
    let newOrder = await ordersModel.find({});
    res.json(newOrder);
  } catch (err) {
    console.log("errror in  fetching new Order", err);
    res.json(err);
  }
};

module.exports.PostNewOrders =async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    //input validation
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        success: false,
        error: "All fields are required: name, qty, price, mode",
      });
    }

    // Create and save order
    const newOrder = new ordersModel({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });

    await newOrder.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};


