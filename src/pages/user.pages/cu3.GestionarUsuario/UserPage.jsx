import { useEffect, useState } from "react";
import UserCard from "../../../components/UserCard";
import { useUser } from "../../../context/user.context/cu3.GestionarUsuario/UserProvider";

function UserPage() {
  const { getUsers, users } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  function renderMain() {
    if (users.length === 0) return <h1>No User yet</h1>;
    return users.map((user) => <UserCard user={user} key={user.id} />);
  }

  return (
    <div>
      <div className="grid grid-cols-3 py-10 px-5 gap-2">{renderMain()}</div>
    </div>
  );
}

export default UserPage;
