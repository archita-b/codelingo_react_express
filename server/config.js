import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;
const db_port = process.env.db_port;
const db_user = process.env.db_user;
const db_password = process.env.db_password;
const db_database = process.env.db_database;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const secret = process.env.SECRET;

export default {
  port,
  host,
  db_port,
  db_user,
  db_password,
  db_database,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  secret,
};
