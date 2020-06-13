import UsuarioService from "../../services/UsuarioService";

class UsuarioManager {
  async listarUsuarios() {
    return await UsuarioService.listarUsuarios();
  }
  async deleteUsuario(idUsuario) {
    return await UsuarioService.deleteUsuario(idUsuario);
  }
  async cadastrarUsuario(dados) {
    return await UsuarioService.cadastrarUsuario(dados);
  }
  
  async updateUsuario(dados) {
    return await UsuarioService.updateUsuario(dados);
  }
}

export default new UsuarioManager();
