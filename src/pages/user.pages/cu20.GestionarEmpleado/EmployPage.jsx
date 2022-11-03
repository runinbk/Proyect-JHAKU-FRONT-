import { useEffect, useState } from "react";
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

  return (
    <div className="bg-slate-300 max-w-lg rounded-md p-4 mx-auto mt-10">
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default EmployPage;
