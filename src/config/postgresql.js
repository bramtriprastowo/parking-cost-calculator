const { Pool } = require("pg");

const { PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env;
const pool = new Pool({
    user:  PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: PG_PORT
});

module.exports = pool