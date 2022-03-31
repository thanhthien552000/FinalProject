const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorhandler = require("errorhandler");

const app = express();
const dbService = require("./service/db");

const rootRouter = require("./routes/index");

// app.use(cors({
//     origin: "*",
// }));

app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(helmet());
app.use(morgan("dev"));
app.use(errorhandler());
app.use(express.json({ urlEncoded: true }));

dbService.connect(process.env.DB_URL);

app.use("/api", rootRouter);

module.exports = app;
