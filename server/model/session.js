import pool from "./database.js";

export async function getUserInfoDB(user_name) {
  const query = `SELECT users.id, users.user_name, users.password, lesson_completion.lesson_id FROM users 
                LEFT JOIN 
                lesson_completion ON users.id=lesson_completion.user_id 
                WHERE user_name=$1`;
  const result = await pool.query(query, [user_name]);

  if (result.rowCount === 0) throw new Error("InvalidUserName");
  return result.rows[0];
}

export async function createSessionDB(user_id, session_id) {
  const result = await pool.query(
    `INSERT INTO sessions (user_id, session_id) VALUES ($1,$2)`,
    [user_id, session_id]
  );
  return result.rows[0];
}

export async function getUserSessionDB(session_id) {
  const result = await pool.query(
    `SELECT * FROM sessions WHERE session_id=$1 AND expired=false`,
    [session_id]
  );
  if (result.rowCount === 0) throw new Error("Session does not exist");
  return result.rows;
}

export async function deleteSession(session_id) {
  // await pool.query(`DELETE FROM sessions WHERE session_id=$1`, [session_id]);
  const result = await pool.query(
    `UPDATE sessions SET expired=true WHERE session_id=$1 RETURNING *`,
    [session_id]
  );
  return result.rows[0];
}
