const createError = require("http-errors")
const jwt = require("../lib/jwt")
const encrypt = require("../lib/encrypt")
const Koders = require ("../models/koders.model")

async function logIn(email, password) {
    const koder = await Koders.findOne({email: email})
    if(!koder){
        throw createError(401, "invalid data")
    }

    const isPaswordValid = await encrypt.compare(password, koder.password)

    if(!isPaswordValid){
        throw createError(401, "invalid data")
    }

    const token = jwt.sign({ id: koder._id })
    return token
}


module.exports = { logIn, }