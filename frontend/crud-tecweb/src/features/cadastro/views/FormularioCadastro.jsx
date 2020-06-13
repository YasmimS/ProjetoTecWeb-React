import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const FormularioCadastro = props => {
  const classes = useStyles();

  const { cadastrarUsuario, usuario, update, setUpdade, atualizarUsuario } = props;

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [whathsApp, setWhathsApp] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleChangeFormulario = (event, campo) => {
    if (campo === "cpf") setCpf(event.target.value);
    else if (campo === "nome") setNome(event.target.value);
    else if (campo === "idade") setIdade(event.target.value);
    else if (campo === "email") setEmail(event.target.value);
    else if (campo === "whathsApp") setWhathsApp(event.target.value);
    else if (campo === "telefone") setTelefone(event.target.value);
  };
  const cadastra = () => {
    let dados = {
      cpf: cpf,
      nome: nome,
      idade: idade,
      email: email,
      whathsApp: whathsApp,
      telefone: telefone
    };

    return dados;
  };

  useEffect(() => {
    setCpf(usuario.cpf);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setIdade(usuario.idade);
    setWhathsApp(usuario.whathsApp);
    setTelefone(usuario.telefone);
  }, [usuario]);


  const acaoBotaoSalvar = dadosUsuario =>{
    update && dadosUsuario? atualizarUsuario(dadosUsuario): cadastrarUsuario(cadastra());
    setUpdade(false);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Cadastro</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Preencha os dados a seguir:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.texto}>Informações usuário:</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          value={cpf}
          onChange={event => handleChangeFormulario(event, "cpf")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={event => handleChangeFormulario(event, "nome")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          id="outlined-basic"
          label="Idade"
          variant="outlined"
          value={idade}
          onChange={event => handleChangeFormulario(event, "idade")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.texto}>Dados complementares:</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          value={email}
          onChange={event => handleChangeFormulario(event, "email")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="WhathsApp"
          variant="outlined"
          value={whathsApp}
          onChange={event => handleChangeFormulario(event, "whathsApp")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          value={telefone}
          onChange={event => handleChangeFormulario(event, "telefone")}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} className={classes.alinhamento}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.botao}
          onClick={() => acaoBotaoSalvar(usuario)}
        >
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  texto: {
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "5px"
  },
  botao: {
    width: "200px",
    height: "49px"
  },
  alinhamento: {
    textAlign: "end"
  }
}));

export default FormularioCadastro;
