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
    
    	if(cases > 0){
        return response.status(204).send();
      }
      return response.status(401).json({ error: 'Operation not permitted' });
      
    } catch (error) {
      return response.status(500).send(error);
    }
  },
};
