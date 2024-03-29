const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());
server.listen(port, function () {
    console.log(`BACKEND está rodando na porta ${port}`);
});

module.exports = server;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo '{MAX}'.";
mongoose.Error.messages.String.enum = "{VALUE} não é válido para o atributo '{PATH}'.";