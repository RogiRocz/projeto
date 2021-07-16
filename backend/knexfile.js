// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'helpmore_test',
      user: 'postgres',
      password: '28031970',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    useNullAsDefault: true,
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'helpmore',
      user: 'postgres',
      password: '28031970',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'helpmore',
      user: 'postgres',
      password: '28031970',
    },
  },
};
