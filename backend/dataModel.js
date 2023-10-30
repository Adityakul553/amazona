const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
