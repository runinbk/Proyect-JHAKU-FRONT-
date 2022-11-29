import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmpleadoCard from "../../../components/cu20.EmpleadoCard";
import { useEmploy } from "../../../context/user.context/cu20.GestionarEmpleado/EmployProvider";

function EmployPage() {
  const { getEmploys, employs } = useEmploy();

  useEffect(() => {
    getEmploys();
  }, []);

  function renderMain() {
    if (employs.length === 0) return <h1>No employ yet</h1>;
    return employs.map((employ) => (
      <EmpleadoCard employ={employ} key={employ.id} />
    ));
  }

  const navigate = useNavigate();

  return (
    <div className="  todo-app">
      <h2 className="text-2xl font-bold text-center p-2">Empleados</h2>
      <div>
        <button
          className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md m-2"
          onClick={() => navigate(`/EmployForm`)}
        >
          Crear
        </button>
      </div>
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default EmployPage;
