const jsonWebToken  = require("jsonwebtoken")
const {JWT_SECRET} = process.env

function sign(payload){
    return jsonWebToken.sign(payload, JWT_SECRET, {expiresIn: "1d"}) //La duración d elos tokens depende de la aplicacion, por ejemplo bancos
}

function verify(token){
    return jsonWebToken.verify(token, JWT_SECRET)
}


module.exports = { sign, verify }
