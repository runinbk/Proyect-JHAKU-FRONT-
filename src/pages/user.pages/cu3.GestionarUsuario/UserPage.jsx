import { useEffect, useState } from "react";
import { getUserRequest } from "../../../api/user/cu3.GestionarUsuario.api";
import UserCard from "../../../components/UserCard";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUserRequest();
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  function renderMain() {
    if (users.length === 0) return <h1>No User yet</h1>;
    return users.map((user) => <UserCard user={user} key={user.id} />);
  }

  return (
    <div>
      <h1>User</h1>
      {renderMain()}
    </div>
  );
}

export default UserPage;
