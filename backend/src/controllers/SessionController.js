const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    try {
      const { login, password} = request.body;
      const user = await connection('users')
      .where('login', login)
      .andWhere('password', password)
      .select('name').first();

      if (!user) {
        return response.status(400).json({ error: 'No User with this id' });
      }
      return response.json(user);
      
    } catch (error) {
      return response.status(500).send(error);
    }
  },
};