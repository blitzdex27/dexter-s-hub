require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const mongoURL = process.env.MONGOURL;
  return mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
