const mongoose = require("mongoose");

const modelNameMentors = "Mentor"; // Es una buena práctica usar el singular y con mayúscula para los modelos.

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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(modelNameMentors, schema);
