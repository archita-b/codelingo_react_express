import { useState } from "react";
import Lesson from "./Lesson";
import LessonSelector from "./LessonSelector";

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div>
      <p>Home page</p>
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
