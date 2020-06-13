const CadastroUsuario = require('../models/CadastroUsuario');

module.exports = {
  async index(req, res) {
    const usuarios = await CadastroUsuario.find();
    return res.json(usuarios);
  },
  async store(req, res) {
    const {
      cpf, 
      nome, 
      email, 
      idade,
      whathsApp,
      telefone 
    } = req.body;

    const retorno = await CadastroUsuario.create({
      cpf, 
      nome, 
      email,
      idade,
      whathsApp,
      telefone,
    });
    return res.json(retorno);
  },
  async delete(req, res) {
    const { id } = req.params
    await CadastroUsuario.findByIdAndDelete(id);
    return res.json({sucess: "true"});
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      cpf, 
      nome, 
      email, 
      idade,
      whathsApp,
      telefone 
    } = req.query;

    const retorno = await CadastroUsuario.findByIdAndUpdate(id,{
      cpf, 
      nome, 
      email,
      idade,
      whathsApp,
      telefone,
    });
    return res.json(retorno);
  }
};