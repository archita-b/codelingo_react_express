import express from "express";
import config from "./config.js";
import lessonRouter from "./routes/lessons.js";

const app = express();

app.use("/api/lessons", lessonRouter);

app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${config.port}`);
  } else {
    console.log("Error connecting to server", error);
  }
});
