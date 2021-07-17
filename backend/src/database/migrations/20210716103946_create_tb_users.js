exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('login').unique().notNullable();
    table.string('password').notNullable();
    table.string('email').unique().notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('type').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('users');
