const Koders = require("../models/koders.model");
const encryptc = require("../lib/encrypt");
const createError = require("http-errors");

async function create(koderData) {
  const koderFound = await Koders.findOne({ email: koderData.email });
  if (koderFound) {
    // throw new Error("Email alrady in use")
    throw createError(409, "email already in use");
  }

  koderData.password = await encryptc.encrypt(koderData.password);
  // const hash = "dklsak"
  const newKoder = await Koders.create(koderData);
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find().populate("generation");
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id).populate("generation"); //Si quieres otro populetes es dentro de la misma "" pero con espacios
  return koder;
}
async function deleteById(id) {
  const koderDeleted = await Koders.findByIdAndDelete(id);
  return koderDeleted;
}

async function updateById(id, newKoderData) {
  const koderUpdated = await Koders.findByIdAndUpdate(id, newKoderData, {
    new: true,
  });
  return koderUpdated;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
