import { useState } from "react";
import { createUserSession } from "../requests";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await createUserSession();
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-100">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 space-y-2">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="shadow rounded border-[2px] border-blue-200 p-1"
          placeholder="Username"
        ></input>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow rounded border-[2px] border-blue-200 p-1"
          placeholder="Password"
        ></input>

        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="shadow rounded p-2 bg-blue-500 text-white font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
