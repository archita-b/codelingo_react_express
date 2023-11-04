import express from "express";
import config from "./config.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth.js";
import lessonRouter from "./routes/lessons.js";

const app = express();

app.use(session({ secret: config.secret }));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/lessons", lessonRouter);

app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${config.port}`);
  } else {
    console.log("Error connecting to server", error);
  }
});
