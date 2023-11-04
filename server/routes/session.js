import express from "express";
import { logOut, userLogin } from "../controller/session.js";

const router = express.Router();

router.post("/", userLogin);
router.delete("/", logOut);

export default router;
