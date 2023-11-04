import express from "express";
import config from "./config.js";
import cors from "cors";
import lessonRouter from "./routes/lessons.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/lessons", lessonRouter);

app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${config.port}`);
  } else {
    console.log("Error connecting to server", error);
  }
});
