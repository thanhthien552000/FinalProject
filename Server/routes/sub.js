const express = require("express");
const subRouter = express.Router();

// middlewares
// const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, read, update, remove, list } = require("../controllers/sub");

// routes
subRouter.post("/", create);
subRouter.get("/", list);
subRouter.get("/:slug", read);
subRouter.put("/:slug", update);
subRouter.delete("/:slug", remove);

module.exports = subRouter;
