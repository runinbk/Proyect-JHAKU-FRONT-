import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard from "../../../components/cu7.GestionarPedidoCard";
import { useOrder } from "../../../context/sales.context/cu7.GestionarPedido/OrderProvider";

function OrderPage() {
  const { getOrders, orders } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  function renderMain() {
    if (orders.length === 0) return <h1>No orders yet</h1>;
    return orders.map((order) => <OrderCard order={order} key={order.id} />);
  }

  const navigate = useNavigate();

  return (
    <div className="  todo-app">
      <h2 className="text-2xl font-bold text-center p-2">Usuarios</h2>
      <div>
        <button
          className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md m-2"
          onClick={() => navigate(`/OrderForm`)}
        >
          Crear
        </button>
      </div>
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default OrderPage;
