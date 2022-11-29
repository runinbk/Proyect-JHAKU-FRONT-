import { useEmploy } from "../context/user.context/cu20.GestionarEmpleado/EmployProvider";
import { useNavigate } from "react-router-dom";

function EmpleadoCard({ employ }) {
  const { deleteEmploy } = useEmploy();
  const navigate = useNavigate();

  return (
    <div class="container overflow-hidden text-center">
      <div class="todo-row">
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">{employ.id}</h1>
        </header>
        <h2 className="text-sm font-bold">{employ.nombre}</h2>
        <h2 className="text-sm font-bold">{employ.apellido}</h2>
        <h2 className="text-sm font-bold">{employ.ci}</h2>
        <h2 className="text-sm font-bold">{employ.direccion}</h2>
        <h2 className="text-sm font-bold">{employ.sexo}</h2>
        <div className="flex gap-x-1">
          <button
            className="bg-lime-400 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/EmployForm/edit/${employ.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-black rounded-md"
            onClick={() => deleteEmploy(employ.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
//-------------------falta el boton de a;adir empleado!!!!!!
export default EmpleadoCard;
