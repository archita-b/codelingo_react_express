import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import {
  createSessionDB,
  deleteSession,
  getUserInfoDB,
} from "../model/session.js";

export async function userLogin(req, res) {
  try {
    const { userName, password } = req.body;
    const userInfo = await getUserInfoDB(userName);

    const matchedPassword = await bcrypt.compare(password, userInfo.password);
    if (!matchedPassword)
      return res.status(401).json({ message: "Wrong password" });

    const sessionId = uuidv4(); // create in db
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
// look for session id that has not been expired

export async function logOut(req, res) {
  try {
    const sessionId = req.cookies.sessionId;
    await deleteSession(sessionId); // set expiry date instead of deleting
    await res.clearCookie("sessionId");
    await res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
