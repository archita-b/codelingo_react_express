import express from "express";
import {
  getLessons,
  getQuestionsByLessonNumber,
} from "../controller/lessons.js";
// import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getLessons);
router.get("/:id", getQuestionsByLessonNumber);

export default router;
