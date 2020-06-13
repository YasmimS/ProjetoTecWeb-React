const mongoose = require('mongoose');

const UseShema = new mongoose.Schema({
  cpf: String,
  nome: String,
  idade: Number,
  email: String,
  whathsApp: String,
  telefone: String,
});

module.exports = mongoose.model('CadastroUsuario', UseShema)