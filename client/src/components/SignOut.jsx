import { useNavigate } from "react-router-dom";
import { deleteSession } from "../requests";

export default function SignOut() {
  const navigate = useNavigate();

  async function handleSignOut() {
    const status = await deleteSession();

    if (status === 204) navigate("/login");
  }

  return (
    <div className="flex justify-end">
      <button
        onClick={handleSignOut}
        className="bg-blue-500 text-white text-lg font-semibold p-3 m-3 rounded-md"
      >
        SignOut
      </button>
    </div>
  );
}
