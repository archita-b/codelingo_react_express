import { useEffect, useState } from "react";
import Lesson from "./Lesson";
import LessonSelector from "./LessonSelector";
import SignOut from "./SignOut";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../requests";

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const navigate = useNavigate();

  async function navigateToHome() {
    const userStatus = await getUserSession();

    // if (userStatus === 401) {
    //   navigate("/login");
    // } else {
    navigate("/");
    // }
  }

  useEffect(() => {
    navigateToHome();
  }, []);

  return (
    <div>
      <SignOut />
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
