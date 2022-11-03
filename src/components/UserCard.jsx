import { useUser } from "../context/user.context/cu3.GestionarUsuario/UserProvider";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { deleteUser } = useUser();
  const navigate = useNavigate();

  return (
    <div className="p-1">
      <div className="bg-slate-400 text-black  rounded-md p-4">
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">{user.id}</h1>
        </header>
        <h2 className="text-sm font-bold">{user.login}</h2>
        <span className="text-sm font-bold">{user.password}</span>
        <div className="flex gap-x-1">
          <button
            className="bg-lime-400 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/UserForm/edit/${user.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-black rounded-md"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
