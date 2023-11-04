import express from "express";
import passport from "../passport.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="auth/google">Authenticate with Google</a>');
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "/api/auth/failure",
  })
);

router.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

router.get("/api/auth/failure", (req, res) => {
  res.send("Something went wrong!");
});

router.get("/logout", (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send("GoodBye");
});

export default router;
