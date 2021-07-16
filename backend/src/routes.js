const express = require('express');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/users', async (request, response) => {
  const { name, login, password, email, whatsapp, city, uf, type } =
    request.body;

  await connection('users').insert({
    name,
    login,
    password,
    email,
    whatsapp,
    city,
    uf,
    type,
  });

  return response.status(200).send('Usuario cadastrado com sucesso');
});

module.exports = routes;
