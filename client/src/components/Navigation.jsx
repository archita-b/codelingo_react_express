import { useEffect, useState } from "react";
import Lesson from "./Lesson";
import LessonSelector from "./LessonSelector";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../requests";

export default function Navigation() {
  const navigate = useNavigate();

  useEffect(() => {
    async () => {
      const userStatus = await getUserSession();

      if (userStatus === 401) {
        navigate("/login");
      } else {
        navigate("/");
      }
    };
  }, []);

  return null;
}
