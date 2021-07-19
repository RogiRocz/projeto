const connection = require('../database/connection');
module.exports = {
  async index(request, response) {
    const cases = await connection('cases')
      .select('*')
    return response.json(cases);
  },

  async create(request, response) {
    const { title, status, description, value } = request.body;
    const user_id = request.headers.authorization;

    const result = await connection('cases').insert({
      title,
      status,
      description,
      value,
      user_id,
    });

    return response.status(200).send('Caso cadastrado com sucesso');
  },

  async deleteCase(request, response) {

    try {
      const { id } = request.params;
      const cases = await connection('cases')
        .where({ id })
        .delete();

      if (cases > 0) {
        return response.status(204).send();
      }
      return response.status(401).json({ error: 'Operation not permitted' });

    } catch (error) {
      return response.status(500).send(error);
    }
  },

  async updateCases(request, response) {
    const { id, title, status, description, value } = request.params
    const result = await connection('cases')
      .where('id', id)
      .update({
        title,
        status,
        description,
        value
      })

    return response.status(200).send('Caso atualizado com sucesso');
  },


  async solvedCases(request, response) {
    const cases = await connection('cases')
      .where('status', 'resolved')
      .select('*')
    return response.json(cases)
  },

  async researchingCases(request, response) {
    const { location } = request.params
    const { uf, city } = location
    const cases = await connection('cases')

    if (uf) {
      const subquery = await connection('users').where({ uf: uf, type: 'ONG' }).select('id')
      cases
        .where('user_id', 'in', subquery)
    } else if (city) {
      const subquery = await connection('users').where({ city: city, type: 'ONG' }).select('id')
      cases
        .where('user_id', '=', subquery)
    } else {
      return response.status(500).send({ error: 'UF e/ou cidade não informados' });
    }

    return response.json(cases);
  }
};
