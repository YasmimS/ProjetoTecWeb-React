import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip
} from "@material-ui/core";
import { Trash, Edit3 } from "react-feather";
import { cpfMask } from "../../../shared/util/formatacao";

const TabelaUsuario = props => {
  const { dadosTabela, removerUsuario, editarUsuario } = props;
  const classes = useStyles();

  return (
    <Grid container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right" width="18%">
                  CPF
                </StyledTableCell>
                <StyledTableCell align="left">Nome</StyledTableCell>
                <StyledTableCell align="right">Idade</StyledTableCell>
                <StyledTableCell align="left" width="20%">
                  E-mail
                </StyledTableCell>
                <StyledTableCell align="left">Whathsapp</StyledTableCell>
                <StyledTableCell align="left">Telefone</StyledTableCell>
                <StyledTableCell align="left" width="12%" />
              </TableRow>
            </TableHead>
            <TableBody>
              {dadosTabela.map(user => (
                <StyledTableRow key={user.nome}>
                  <StyledTableCell align="right">
                    {cpfMask(user.cpf)}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.nome}</StyledTableCell>
                  <StyledTableCell align="right">{user.idade}</StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {user.whathsApp}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.telefone}
                  </StyledTableCell>
                  <StyledTableCell>
                    <span
                      className={classes.cursorBotao}
                       onClick={() => editarUsuario(user)}
                    >
                      <Tooltip title="Editar">
                        <Edit3 size={22} />
                      </Tooltip>
                    </span>
                    <span
                      className={classes.cursorBotao}
                       onClick={() => removerUsuario(user._id)}
                    >
                      <Tooltip title="Excluir">
                        <Trash size={22} />
                      </Tooltip>
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Grid>
  );
};
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles(() => ({
  cursorBotao: {
    cursor: "pointer",
    marginLeft: "16px",
    height: "22px"
  }
}));

export default TabelaUsuario;
