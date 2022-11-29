import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientCard from "../../../components/cu5.GestionarClienteCard";
import { useClient } from "../../../context/sales.context/cu5.GestionarClientes/ClientProvider";

function ClientPage() {
  const { getClients, clients } = useClient();

  useEffect(() => {
    getClients();
  }, []);

  function renderMain() {
    if (clients.length === 0) return <h1>No client yet</h1>;
    return clients.map((client) => (
      <ClientCard client={client} key={client.id} />
    ));
  }

  const navigate = useNavigate();
  return (
    <div className="  todo-app">
      <h2 className="text-2xl font-bold text-center p-2">Clientes</h2>
      <div>
        <button
          className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md m-2"
          onClick={() => navigate(`/ClientForm`)}
        >
          Crear
        </button>
      </div>
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default ClientPage;
