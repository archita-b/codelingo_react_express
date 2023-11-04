import pg from "pg";
import config from "../config.js";
const { Pool } = pg;

const pool = new Pool({
  host: config.host,
  port: config.db_port,
  user: config.db_user,
  password: config.db_password,
  database: config.db_database,
});

export default pool;
