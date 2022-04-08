const rootRouter = require("express").Router();
const categoryRouter = require("./category");
const subRouter = require("./sub");
const productRouter = require("./product");

rootRouter.use(`/category`, categoryRouter);
rootRouter.use(`/sub`, subRouter);
rootRouter.use(`/product`, productRouter);

module.exports = rootRouter;
