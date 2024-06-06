const Generation = require("../models/generations.model");
const createError = require("http-errors");

async function create(generationData) {
  const generationFound = await Generation.findOne({
    number: generationData.number,
    program: generationData.program,
  });
  if (generationFound) {
    throw createError(409, "Generation alrady in use");
  }

  const newGeneration = await Generation.create(generationData);
  return newGeneration;
}

async function getAll() {
  const allGenerations = await Generation.find();
  return allGenerations;
}

async function getById(id) {
  const generation = await Generation.findById(id);
  return generation;
}

async function deleteById(id) {
  const generationDelete = await Generation.findByIdAndDelete(id);
  return generationDelete;
}

async function updateById(id, newGenerationData) {
  const generationUpdate = await Generation.findByIdAndUpdate(
    id,
    newGenerationData
  );
  return generationUpdate;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
