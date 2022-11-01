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
    <div>
      <h1>Client</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default ClientPage;
