import { useOrder } from "../context/sales.context/cu7.GestionarPedido/OrderProvider";
import { useNavigate } from "react-router-dom";

function OrderCard({ order }) {
  const { deleteOrder } = useOrder();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>{order.id}</h1>
      </header>

      <h2>{order.detalle}</h2>
      <h2>{order.fecha}</h2>
      <h2>{order.fechaEntrega}</h2>
      <h2>{order.total}</h2>
      <h2>{order.idEmpleado}</h2>
      <h2>{order.idCliente}</h2>

      <div>
        <button onClick={() => navigate(`/edit/${order.id}`)}>Edit</button>
        <button onClick={() => deleteOrder(order.id)}>Delete</button>
      </div>
    </div>
  );
}

export default OrderCard;
