const url = "http://localhost:7000/api";

// export function isAuthenticated(res) {
//   if (res.status === 401) {
//     window.location.href = "http://localhost:7000/api/auth";
//   }
// }

export async function isAuthenticated() {
  const res = await fetch(url + "/sessions");
  return res.status;
}

export async function getLessons() {
  const res = await fetch(url + "/lessons", { credentials: "include" });
  const data = await res.json();
  return data;
}

export async function getQuestionsForLesson(lesson_id) {
  const res = await fetch(url + "/lessons/" + lesson_id, {
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

export async function createUserSession(username, password) {
  const res = await fetch(url + "/sessions", {
    method: "POST",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  return data;
}
