const express = require("express");

const userRouter = express.Router();

// // middlewares
// const { authCheck } = require("../middlewares/auth");
// // controllers
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  applyCouponToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
  createCashOrder,
} = require("../controllers/user");

userRouter.post("/cart", userCart); // save cart them middlle
userRouter.get("/cart", getUserCart); // get cart  them middlle
userRouter.delete("/cart", emptyCart); // empty cart  them middlle
userRouter.post("/address", saveAddress); //them middlle

userRouter.post("/order", createOrder); // stripe  them middlle
userRouter.post("/cash-order", createCashOrder); // cod  them middlle
userRouter.get("/orders", orders); // them middlle

// coupon
userRouter.post("/cart/coupon", applyCouponToUserCart); // them middlle

// wishlist
userRouter.post("/wishlist", addToWishlist);
userRouter.get("/wishlist", wishlist);
userRouter.put("/wishlist/:productId", removeFromWishlist);

// userRouter.get("/user", (req, res) => {
//   res.json({
//     data: "hey you hit user API endpoint",
//   });
// });

module.exports = userRouter;
