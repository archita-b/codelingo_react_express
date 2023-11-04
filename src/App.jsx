import { useState } from "react";
import "./App.css";
import LessonSelector from "./components/LessonSelector";
import Lesson from "./components/Lesson";

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div>
      {selectedLesson === null ? (
        <LessonSelector setSelectedLesson={setSelectedLesson} />
      ) : (
        <Lesson
          selectedLesson={selectedLesson}
          setSelectedLesson={setSelectedLesson}
        />
      )}
    </div>
  );
}
