import bcrypt from "bcrypt";
import { registerUserDB } from "../model/user.js";

export async function registerUser(req, res) {
  try {
    const { userName, password } = req.body;
    const isAdmin = req.body.isAdmin;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const response = await registerUserDB(userName, hashedPassword, isAdmin);
    await res.status(201).json(response);
  } catch (error) {
    if (error.message === "User exists") {
      return res.status(409).json({ message: "User already exists" });
    }
    throw new Error(error);
  }
}
