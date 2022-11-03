import { useEmploy } from "../context/user.context/cu20.GestionarEmpleado/EmployProvider";
import { useNavigate } from "react-router-dom";

function EmpleadoCard({ employ }) {
  const { deleteEmploy } = useEmploy();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>{employ.id}</h1>
      </header>
      <h2>{employ.nombre}</h2>
      <h2>{employ.apellido}</h2>
      <h2>{employ.ci}</h2>
      <h2>{employ.direccion}</h2>
      <h2>{employ.sexo}</h2>
      <div>
        <button onClick={() => navigate(`/edit/${employ.id}`)}>Edit</button>
        <button onClick={() => deleteEmploy(employ.id)}>Delete</button>
      </div>
    </div>
  );
}
//-------------------falta el boton de a;adir empleado!!!!!!
export default EmpleadoCard;
