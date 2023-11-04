import { useEffect, useState } from "react";
import { getLessons } from "../requests";

export default function LessonSelector({ setSelectedLesson }) {
  const [lessonData, setLessonData] = useState([]);

  useEffect(() => {
    getLessons().then((data) => {
      if (data) setLessonData(data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 font-bold text-3xl text-slate-600">
        Choose a Lesson
      </h1>
      <div className="w-96 h-96 p-4 grid grid-cols-2 gap-6">
        {lessonData.map((lesson) => {
          return (
            <button
              key={lesson.id}
              className={`relative rounded-xl border-x-2 border-t-2 border-b-4 border-slate-300 text-slate-500 font-semibold text-3xl hover:bg-slate-200`}
              onClick={() => {
                setSelectedLesson(lesson.id);
              }}
            >
              Lesson {lesson.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}
