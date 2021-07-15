exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('user').notNullable();
    table.string('senha').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('type').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('users');
