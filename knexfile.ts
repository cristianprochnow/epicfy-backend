module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '3306'),
    user: "root",
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: "./migrations"
  }
};