const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://tecweb:tecweb@cluster0-nhqcn.mongodb.net/cadastroUsuario?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3320);