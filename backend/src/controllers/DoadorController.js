const connection = require('../database/connection');
module.exports = {
  async index(request, response) {
    const ongs = await connection('users')
      .select('*')
      .where('type', '=', 'Doador');
    return response.json(ongs);
  },
  async deleteDoador(request, response) {
    try {
      const { id } = request.params;
      const doador = await connection('users')
        .where({ id })
        .andWhere('type', '=', 'Doador')
        .delete();
        
        //console.log(test)
      if(doador > 0){
        return response.status(204).send();
      }
      return response.status(401).json({ error: 'Operation not permitted' });
      
    } catch (error) {
      return response.status(500).send(error);
    }
  },
}