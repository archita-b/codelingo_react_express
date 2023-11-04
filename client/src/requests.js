const url = "http://localhost:7000/api";

function isAuthenticated(res) {
  if (res.status === 401) {
    window.location.href = "http://localhost:7000/api/auth";
  }
}

export async function getLessons() {
  const res = await fetch(url + "/lessons", { credentials: "include" });
  isAuthenticated(res);
  const data = await res.json();
  return data;
}

export async function getQuestionsForLesson(lesson_id) {
  const res = await fetch(url + "/lessons/" + lesson_id, {
    credentials: "include",
  });
  isAuthenticated(res);
  const data = await res.json();
  return data;
}
