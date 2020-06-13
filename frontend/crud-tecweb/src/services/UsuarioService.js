import axios from "../axiosInstance";

class UsuarioService {
  async listarUsuarios() {
    return await axios
      .get("/usuario")
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  async deleteUsuario(id) {
    await axios.delete(`removeUsuarios/${id}`);
  }

  async cadastrarUsuario(dados) {
    return await axios.post('usuarios/', dados);
  }

  async updateUsuario(dados) {
      console.log(dados);
    return await axios.put('usuarios/', dados);
  }
}

export default new UsuarioService();
