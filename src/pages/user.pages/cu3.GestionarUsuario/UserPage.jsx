import { useEffect, useState } from "react";
import UserCard from "../../../components/UserCard";
import { useUser } from "../../../context/user.context/cu3.GestionarUsuario/UserProvider";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const { getUsers, users } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  function renderMain() {
    if (users.length === 0) return <h1>No User yet</h1>;
    return users.map((user) => <UserCard user={user} key={user.id} />);
  }

  const navigate = useNavigate();

  return (
    <div className="  todo-app">
      <h2 className="text-2xl font-bold text-center p-2">Usuarios</h2>
      <div>
        <button
          className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md m-2"
          onClick={() => navigate(`/UserForm`)}
        >
          Crear
        </button>
      </div>

      <div>{renderMain()}</div>
    </div>
  );
}

export default UserPage;
