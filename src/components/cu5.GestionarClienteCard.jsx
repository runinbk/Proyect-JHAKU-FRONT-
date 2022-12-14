import { useClient } from "../context/sales.context/cu5.GestionarClientes/ClientProvider";
import { useNavigate } from "react-router-dom";

function ClientCard({ client }) {
  const { deleteClient } = useClient();
  const navigate = useNavigate();

  return (
    <div class="container overflow-hidden text-center">
      <div class="todo-row">
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">{client.nombre}</h1>
        </header>

        <h2 className="text-sm font-bold">{client.apellido}</h2>
        <h2 className="text-sm font-bold">{client.ci}</h2>
        <h2 className="text-sm font-bold">{client.telefono}</h2>
        <h2 className="text-sm font-bold">{client.direccion}</h2>

        <h2>{client.id}</h2>
        <div className="flex gap-x-1">
          <button
            className="bg-lime-400 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/ClientForm/edit/${client.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-black rounded-md"
            onClick={() => deleteClient(client.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
