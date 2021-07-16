const connection = require('../database/connection');
module.exports = {
  async index(request, response) {
    const ongs = await connection('users')
      .select('*')
      .where('type', '=', 'Doador');
    return response.json(ongs);
  },

  async update(request, response){
    try {
      const {name, login, password, email, whatsapp, city, uf} = request.body;
      const { id } = request.params;
      const doador = await connection('users')
        .update({name, login, password, email, whatsapp, city, uf})
        .where({ id })
        .andWhere('type', '=', 'Doador')
        
        
       // console.log(doador)
      if(doador > 0){
        return response.status(204).send();
      }
      return response.status(401).json({ error: 'Operation not permitted' });
      
    } catch (error) {
      return response.status(500).send(error);
    }
  },

  async delete(request, response) {
    try {
      const { id } = request.params;
      const doador = await connection('users')
        .where({ id })
        .andWhere('type', '=', 'Doador')
        .delete();
        
        //console.log(doador)
      if(doador > 0){
        return response.status(204).send();
      }
      return response.status(401).json({ error: 'Operation not permitted' });
      
    } catch (error) {
      return response.status(500).send(error);
    }
  },
}