const url = "http://localhost:7000/api";

// export function isAuthenticated(res) {
//   if (res.status === 401) {
//     window.location.href = "http://localhost:7000/api/auth";
//   }
// }

export async function getLessons() {
  const res = await fetch(url + "/lessons", { credentials: "include" });
  // console.log("res", res);
  if (!res.ok) return;

  const data = await res.json();
  return { data, status: res.status };
}

export async function getQuestionsForLesson(lesson_id) {
  const res = await fetch(url + "/lessons/" + lesson_id, {
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

export async function registerUser(username, password) {
  const res = await fetch(url + "/users", {
    method: "POST",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  return { status: res.status, data };
}

export async function createUserSession(username, password) {
  const res = await fetch(url + "/sessions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
  const data = await res.json();
  return { status: res.status, data };
}

export async function getUserSession() {
  const res = await fetch(url + "/sessions", {
    credentials: "include",
  });

  if (res.status !== 200) return { data: null, status: 401 };

  const data = await res.json();
  return { data, status: res.status };
}

export async function deleteSession() {
  const res = await fetch(url + "/sessions", {
    credentials: "include",
    method: "DELETE",
  });

  if (!res.ok) return { data: null, status: res.status };

  const data = await res.json();

  return { data, status: res.status };
}
