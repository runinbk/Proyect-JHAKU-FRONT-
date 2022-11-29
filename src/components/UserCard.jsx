import { useUser } from "../context/user.context/cu3.GestionarUsuario/UserProvider";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { deleteUser } = useUser();
  const navigate = useNavigate();

  return (
    <div class="container overflow-hidden text-center">
      <div class="todo-row">
        <header className="col">
          <h1 className="text-sm font-bold col order-last">{user.id}</h1>
        </header>
        <div className="col">
          <h2 className="text-sm font-bold col">{user.login}</h2>
        </div>
        <span className="text-sm font-bold col">{user.password}</span>
        <div className="flex gap-x-1">
          <button
            className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/UserForm/edit/${user.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 p-2  px-2 py-1 text-black rounded-md"
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
