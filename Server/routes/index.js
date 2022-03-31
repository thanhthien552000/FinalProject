const rootRouter = require("express").Router();
const categoryRouter = require("./category");
rootRouter.use(`/category`, categoryRouter);

module.exports = rootRouter;
