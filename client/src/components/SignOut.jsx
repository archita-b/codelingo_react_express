import { useNavigate } from "react-router-dom";
import { deleteSession } from "../requests";

export default function SignOut() {
  const navigate = useNavigate();

  async function handleSignOut() {
    const status = await deleteSession();

    if (status === 204) Navigate("/login");
  }

  return <button onClick={handleSignOut}>signout</button>;
}
