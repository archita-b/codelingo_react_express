import express from "express";
import config from "./config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import sessionRouter from "./routes/session.js";
import lessonRouter from "./routes/lessons.js";

const app = express();

function error(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
}

// app.use(session({ secret: config.secret }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/sessions", sessionRouter);
app.use("/api/lessons", lessonRouter);

app.use(error);

app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${config.port}`);
  } else {
    console.log("Error connecting to server", error);
  }
});
