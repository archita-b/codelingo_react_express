import pool from "./database.js";

export async function getLessonsDB() {
  const result = await pool.query("SELECT * FROM lessons");
  return result.rows;
}

export async function getQuestionsByLessonNumberDB(lesson_id) {
  const result = await pool.query(
    "SELECT * FROM questions WHERE lesson_id=$1",
    [lesson_id]
  );
  return result.rows;
}
