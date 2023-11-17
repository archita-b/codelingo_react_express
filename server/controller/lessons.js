import {
  getLessonsDB,
  getQuestionsByLessonNumberDB,
} from "../model/lessons.js";

export async function getLessons(req, res) {
  try {
    const response = await getLessonsDB();
    await res.status(200).json(response);
  } catch (error) {
    return res.json({ message: "Error retrieving lessons" });
  }
}

export async function getQuestionsByLessonNumber(req, res) {
  try {
    const lesson_id = req.params.id;
    const response = await getQuestionsByLessonNumberDB(lesson_id);
    await res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: `Error retrieving questions for lesson ${req.params.id}`,
    });
  }
}
