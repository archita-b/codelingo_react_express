import express from "express";
import { getSession, logOut, userLogin } from "../controller/session.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.get("/", isLoggedIn, getSession);
router.post("/", userLogin);
router.delete("/", logOut);

export default router;
