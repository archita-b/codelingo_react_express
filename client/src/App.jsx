import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonSelector from "./components/LessonSelector";
import Lesson from "./components/Lesson";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import { isAuthenticated } from "./requests";

export default function App() {
  useEffect(() => {
    const userStatus = isAuthenticated();
    if (userStatus === 401) {
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
