import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserSession } from "../requests";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    const res = await createUserSession(userName, password);

    if (res.status !== 201) return;

    navigate("/");
  }

  return (
    <div className="bg-sky-100 h-screen">
      <div className="flex justify-end p-6">
        <Link to="/signup">Sign Up</Link>
      </div>

      <div className="flex justify-center items-center">
        <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 space-y-2">
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow rounded border-[2px] border-blue-200 p-1"
            placeholder="Username"
          ></input>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow rounded border-[2px] border-blue-200 p-1"
            placeholder="Password"
          ></input>

          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="shadow rounded p-2 bg-blue-500 hover:bg-blue-600 text-white font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
