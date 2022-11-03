import { useEffect, useState } from "react";
import UserCard from "../../../components/UserCard";
import { useUser } from "../../../context/user.context/cu3.GestionarUsuario/UserProvider";
import { Form } from "formik";

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
    <div className="bg-slate-300 max-w-lg rounded-md p-4 mx-auto mt-10">
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default UserPage;
