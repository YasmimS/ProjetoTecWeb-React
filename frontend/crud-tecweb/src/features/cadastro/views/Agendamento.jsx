import React, { useState, useEffect } from "react";
import UsuarioManager from "../UsuarioManager";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TabelaUsuario from "./TabelaUsuario";
import FormularioCadastro from "./FormularioCadastro";

const Agendamento = () => {
  const classes = useStyles();
  const [usuario, setUsuario] = useState({});
  const [update, setUpdade] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    listarUsuarios();
    setCarregar(false);
  }, [carregar]);

  const listarUsuarios = async () => {
    let dados = await UsuarioManager.listarUsuarios();
    setListaUsuarios(dados);
  };

  const removerUsuario = async idUsuario => {
    setCarregar(true);
    await UsuarioManager.deleteUsuario(idUsuario);
  };

  const cadastrarUsuario = async novoUsuario => {
    setCarregar(true);
    await UsuarioManager.cadastrarUsuario(novoUsuario);
  };

  const atualizarUsuario = async(usuarioEditado) =>{
    await UsuarioManager.updateUsuario(usuarioEditado);
  }

  const editarUsuario = (usuarioSelecionado) =>{
    setUsuario(usuarioSelecionado);
    setUpdade(true);
  }

  return (
    <Grid container spacing={3} className={classes.espacamento}>
      <Grid item x={12}>
        <FormularioCadastro 
          cadastrarUsuario={cadastrarUsuario} 
          usuario={usuario}           
          update={update}
          setUpdade ={setUpdade}
          atualizarUsuario={atualizarUsuario}
          />
      </Grid>
      <Grid item xs={12}>
        <TabelaUsuario
          dadosTabela={listaUsuarios}
          removerUsuario={removerUsuario}
          editarUsuario={editarUsuario}
          setUsuario={setUsuario}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  espacamento: {
    width: "100%",
    padding: "20px"
  }
}));

export default Agendamento;
