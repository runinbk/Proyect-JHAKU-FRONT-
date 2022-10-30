import { useUser } from "../context/user.context/cu3.GestionarUsuario/UserProvider";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { deleteUser } = useUser();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>{user.id}</h1>
      </header>
      <h2>{user.login}</h2>
      <span>{user.password}</span>
      <div>
        <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
