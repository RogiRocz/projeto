const connection = require('../database/connection');
module.exports = {
  /*async index(request, response) {
    const ongs = await connection('users')
      .select('*')
      .where('type', '=', 'ONG');
    return response.json(ongs);
  },*/

  async create(request, response) {
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
  },
  
  
};
