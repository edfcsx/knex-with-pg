// Update with your config settings.

module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      database: 'knex',
      user: 'postgres',
      password: 'g31sdk',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: 'g31sdk',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
