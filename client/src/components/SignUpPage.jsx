import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../requests";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegistration() {
    if (password !== reEnterPassword) {
      alert("passwords did not match");
      return;
    }
    const res = await registerUser(userName, password, reEnterPassword);

    if (res.status !== 201) return;
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2 space-y-2">
        <p className="text-slate-600">Sign up</p>

        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="shadow rounded border-[2px] border-green-200 p-1"
          placeholder="Username"
        ></input>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="shadow rounded border-[2px] border-green-200 p-1"
          placeholder="Password"
        ></input>

        <input
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
          type="password"
          className="shadow rounded border-[2px] border-green-200 p-1"
          placeholder="Re-enter password"
        ></input>

        <div className="flex justify-center">
          <button
            onClick={handleRegistration}
            className="shadow rounded p-2 bg-green-500 hover:bg-green-600 text-white font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
