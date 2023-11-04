import express from "express";
import validateUser from "../middleware/validateUser.js";
import { registerUser } from "../controller/user.js";

const router = express.Router();

router.post("/", validateUser, registerUser);

export default router;
