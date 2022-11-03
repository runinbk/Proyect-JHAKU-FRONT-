import { useEffect, useState } from "react";
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

  return (
    <div className="bg-slate-300 max-w-lg rounded-md p-4 mx-auto mt-10">
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default OrderPage;
