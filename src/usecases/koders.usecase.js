const Koders = require("../models/koders.model")
const createError = require("http-errors")

async function create (koderData) {
    const koderFound = await Koders.findOne({ email: koderData.email })
    if(koderFound){
        // throw new Error("Email alrady in use")
        throw createError(409, "email already in use")
    }

    // const hash = "dklsak"
    const newKoder = await Koders.create(koderData)
    return newKoder
    
}

async function getAll(){
    const allKoders = await Koders.find()
    return allKoders
}

async function getById(id){
    const koder = await Koder.findById(id)
    return koder
}
async function deleteById(id){
  const koderDeleted = await Koders.findByIdAndDelete(id)
  return koderDeleted
}

async function updateById(id, newKoderData){
 const koderUpdated = await Koders.findByIdAndUpdate(id, newKoderData, {new : true})
 return koderUpdated
}


module.exports = {
    create, getAll, getById, deleteById, updateById
}