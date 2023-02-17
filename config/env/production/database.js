const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const host = env('DATABASE_HOST', '127.0.0.1');
  const port = env.int('DATABASE_PORT', 5432);
  const { database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      debug: false,
    },
  };
};