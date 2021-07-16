exports.up = (knex) =>
  knex.schema.createTable('incidents', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });

exports.down = (knex) => knex.schema.dropTable('incidents');
