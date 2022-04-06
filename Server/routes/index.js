const rootRouter = require("express").Router();
const categoryRouter = require("./category");
const subRouter = require("./sub");
const productRouter = require("./product");
const userRouter = require("./user");
rootRouter.use(`/user`, userRouter);
rootRouter.use(`/category`, categoryRouter);
rootRouter.use(`/sub`, subRouter);
rootRouter.use(`/product`, productRouter);

module.exports = rootRouter;
