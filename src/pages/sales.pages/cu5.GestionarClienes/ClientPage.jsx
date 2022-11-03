import { useEffect, useState } from "react";
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

  return (
    <div className="bg-slate-300 max-w-lg rounded-md p-4 mx-auto mt-10">
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default ClientPage;
