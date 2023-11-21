import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import {
  createSessionDB,
  deleteSession,
  getUserInfoDB,
} from "../model/session.js";

export async function getSession(req, res) {
  try {
    res.json({ status: 200, message: "success" });
  } catch (error) {
    throw new Error(error);
  }
}

export async function userLogin(req, res) {
  try {
    const { username, password } = req.body;
    const userInfo = await getUserInfoDB(username);

    const matchedPassword = await bcrypt.compare(password, userInfo.password);
    if (!matchedPassword)
      return res.status(401).json({ message: "Wrong password" });

    const sessionId = uuidv4();
    await createSessionDB(userInfo.id, sessionId);

    return res
      .cookie("sessionId", sessionId, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .status(201)
      .json({ message: "User session created" });
  } catch (error) {
    if (error.message === "InvalidUserName")
      return res.status(401).json({ message: "Invalid user name" });

    throw new Error(error);
  }
}

export async function logOut(req, res) {
  try {
    const sessionId = req.cookies.sessionId;
    const updatedSessions = await deleteSession(sessionId);

    if (updatedSessions.expired === true) {
      await res.clearCookie("sessionId");
      await res.status(200).json({ message: "User session expired" });
    }
  } catch (error) {
    res.sendStatus(500);
  }
}
