exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'teste',
          user: 'thsgf',
          senha: 'djkjd453',
          email: 'email@example.com',
          whatsapp: '(88)992000246',
          city: 'Quixas',
          uf: 'CE',
          type: 'ong',
        },
      ]);
    });
};
