const knex = require('./db/knex');

async function migrationsAndSeeds() {
  await knex.migrate.latest()
    .then(() => knex.seed.run())
    // eslint-disable-next-line no-console
    .then(() => console.log('running migrations and seeds...'))
    // eslint-disable-next-line no-console
    .catch(() => console.log('fail running migrations and seeds'));
  process.exit();
}

migrationsAndSeeds();
