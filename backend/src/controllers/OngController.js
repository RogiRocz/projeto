const connection = require('../database/connection');
module.exports = {
  async index(request, response) {
    const ongs = await connection('users')
      .select('*')
      .where('type', '=', 'ONG');
    return response.json(ongs);
  },
  
  async deleteONG(request, response) {
    const { id } = request.params;

    const user = await connection('users')
      .where({ id })
      .andWhere('type', '=', 'ONG')
      .select('id')
      .first();

    if (user.id !== id) {
      return response.status(401).json({ error: 'Operation not permitted' });
    }

    await connection('users')
      .where({ id })
      .andWhere('type', '=', 'ONG')
      .delete();
    return response.status(204).send();
  },
}