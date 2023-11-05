import express from "express";
import { logOut, userLogin } from "../controller/session.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.get("/", isLoggedIn);
router.post("/", userLogin);
router.delete("/", logOut);

export default router;
