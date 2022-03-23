module.exports = {
  type: String(process.env.DB_TYPE),
  host: String(process.env.DB_HOST),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
  entities: [String(process.env.DB_ENTITIES_PATH)],
  migrations: [String(process.env.DB_MIGRATIONS_PATH)],
  cli: {
  entitiesDir: "src/database/entities",
  migrationsDir: "src/database/migrations",
  },
};