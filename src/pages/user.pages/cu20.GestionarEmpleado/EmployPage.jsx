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
    return employs.map((employ) => <EmpleadoCard employ={employ} key={employ.id} />);
  }

  return (
    <div>
      <h1>Employ</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default EmployPage;