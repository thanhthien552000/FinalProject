const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  console.log(req.headers);
  next();
};
