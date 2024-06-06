// Se ocupa un archvio para no depender de las librerías, solo sería cambiar la librería en este doc

const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 10; //CARACTERES EXTRAS PARA AGREGAR A LA CONTRASEÑA del usuario

function encrypt(text) {
  return bcrypt.hash(text, SALT_ROUNDS);
}

function compare(plainText, hash) {
  return bcrypt.compare(plainText, hash);
}

module.exports = { encrypt, compare };
