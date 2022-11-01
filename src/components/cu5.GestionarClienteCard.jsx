import { useClient } from "../context/sales.context/cu5.GestionarClientes/ClientProvider";
import { useNavigate } from "react-router-dom";

function ClientCard({ client }) {
  const { deleteClient } = useClient();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>{client.nombre}</h1>
      </header>

      <h2>{client.apellido}</h2>
      <h2>{client.ci}</h2>
      <h2>{client.telefono}</h2>
      <h2>{client.direccion}</h2>

      <h2>{client.id}</h2>
      <div>
        <button onClick={() => navigate(`/edit/${client.id}`)}>Edit</button>
        <button onClick={() => deleteClient(client.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ClientCard;
