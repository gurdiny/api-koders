const mongoose = require("mongoose");

const modelName = "koder";

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  lastName: {
    type: String,
    required: false,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: false,
  },
  generation: {
    qsd,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// const model = mongoose.model(modelName, schema)
module.exports = mongoose.model(modelName, schema);
