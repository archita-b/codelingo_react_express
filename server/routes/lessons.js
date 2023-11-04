import express from "express";
import {
  getLessons,
  getQuestionsByLessonNumber,
} from "../controller/lessons.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.get("/", isLoggedIn, getLessons);
router.get("/:id", isLoggedIn, getQuestionsByLessonNumber);

export default router;
