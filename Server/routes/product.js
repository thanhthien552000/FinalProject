const express = require("express");
const productRouter = express.Router();

// // middlewares
// const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
  productStar,
  listRelated,
  searchFilters,
} = require("../controllers/product");

// routes
productRouter.post("/", create);
productRouter.get("/total", productsCount);

productRouter.get("/", listAll); // products/100
productRouter.delete("/:slug", remove);
productRouter.get("/:slug", read);
productRouter.put("/:slug", update);

productRouter.post("/", list);
// rating
productRouter.put("/star/:productId", productStar);
// related
productRouter.get("/related/:productId", listRelated);
// search
productRouter.post("/search/filters", searchFilters);

module.exports = productRouter;
