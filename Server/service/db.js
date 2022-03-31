const db = {};
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

db.mongoose = mongoose;

db.connect = async (dbConnectionUrl) => {
  try {
    await mongoose.connect(dbConnectionUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error(`Connecting error: ${error}`);
  }
};

module.exports = db;
