export default function validateUser(req, res, next) {
  const { userName, password } = req.body;

  if (userName.trim() === "")
    return res.status(400).json({ message: "Invalid username" });

  if (password.length < 4)
    return res.status(400).json({ message: "Password too short" });

  next();
}
