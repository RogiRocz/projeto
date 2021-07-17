exports.up = (knex) =>
  knex.schema.createTable('cases', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('status').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('cases');