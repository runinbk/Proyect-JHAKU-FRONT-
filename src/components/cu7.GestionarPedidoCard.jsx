import { useOrder } from "../context/sales.context/cu7.GestionarPedido/OrderProvider";
import { useNavigate } from "react-router-dom";

function OrderCard({ order }) {
  const { deleteOrder } = useOrder();
  const navigate = useNavigate();

  return (
    <div className="p-1 className=bg-slate-400 text-black  rounded-md ">
      <header className="flex justify-between">
        <h1 className="text-sm font-bold">{order.id}</h1>
      </header>

      <h2 className="text-sm font-bold">{order.detalle}</h2>
      <h2 className="text-sm font-bold">{order.fecha}</h2>
      <h2 className="text-sm font-bold">{order.fechaEntrega}</h2>
      <h2 className="text-sm font-bold">{order.total}</h2>
      <h2 className="text-sm font-bold">{order.idEmpleado}</h2>
      <h2 className="text-sm font-bold">{order.idCliente}</h2>

      <div>
        <button
          className="bg-lime-400 px-2 py-1 text-black rounded-md"
          onClick={() => navigate(`/edit/${order.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 px-2 py-1 text-black rounded-md"
          onClick={() => deleteOrder(order.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
