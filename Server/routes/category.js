const express = require("express");
const categoryRouter = express.Router();

// middlewares
// const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
  getSubs,
} = require("../controllers/category");

// routes
categoryRouter.post("/", create);
categoryRouter.get("/", list);
categoryRouter.get("/:slug", read);
categoryRouter.put("/:slug", update);
categoryRouter.delete("/:slug", remove);
categoryRouter.get("/subs/:_id", getSubs);

module.exports = categoryRouter;
