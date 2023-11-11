import pool from "./database.js";

export async function registerUserDB(user_name, password) {
  try {
    const result = await pool.query(
      "INSERT INTO users (user_name,password) VALUES ($1,$2) RETURNING *",
      [user_name, password]
    );
    return result.rows[0].user_name;
  } catch (error) {
    if (error.code === "23505") throw new Error("User exists");
  }
}

export async function isUserAdmin(user_name) {
  const result = await pool.query("SELECT is_admin FROM users WHERE name=$1", [
    user_name,
  ]);
  return result.rows[0].is_admin;
}
