const Order = require("../models/order");
// const User = require("../models/user");

exports.orders = async (req, res) => {
  let allOrders = await Order.find({})
    .populate({ path: "products", populate: { path: "product" } }) // truy cap vao bang
    .sort("-createdAt") //sap xep theo thu tu
    .exec();

  res.json(allOrders);
};

exports.orderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();
  res.json(updated);
};
