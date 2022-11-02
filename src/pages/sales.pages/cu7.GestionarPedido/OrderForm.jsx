import { Formik, Form } from "formik";
import { useOrder } from "../../../context/sales.context/cu7.GestionarPedido/OrderProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderForm() {
  const { createOrder, getOrder, updateOrder } = useOrder();

  const [order, setOrder] = useState({
    id: "",
    detalle: "",
    fecha: "",
    fechaEntrega: "",
    total: "",
    idEmpleado: "",
    idCliente: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadOrder = async () => {
      if (params.id) {
        const order = await getOrder(params.id);
        setOrder({
          id: order.id,
          detalle: order.detalle,
          fecha: order.fecha,
          fechaEntrega: order.fechaEntrega,
          total: order.total,
          idEmpleado: order.idEmpleado,
          idCliente: order.idCliente,
        });
      }
    };
    loadOrder();
  }, []);

  return (
    <Formik
      initialValues={order}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        console.log(values);
        if (params.id) {
          await updateOrder(params.id, values);
          navigate("/");
        } else {
          await createOrder(values);
        }
        setOrder({
          id: "",
          detalle: "",
          fecha: "",
          fechaEntrega: "",
          total: "",
          idEmpleado: "",
          idCliente: "",
        });
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <h1>{params.id ? "Editar Pedido" : "Crear Pedido"}</h1>

          <label>ID</label>
          <input
            type="text"
            name="id"
            value={values.id}
            onChange={handleChange}
          />

          <label>Detalle</label>
          <input
            type="text"
            name="detalle"
            value={values.detalle}
            onChange={handleChange}
          />

          <label>Fecha</label>
          <input
            type="text"
            name="fecha"
            value={values.fecha}
            onChange={handleChange}
          />

          <label>Fecha de Entrega</label>
          <input
            type="text"
            name="fechaEntrega"
            value={values.fechaEntrega}
            onChange={handleChange}
          />

          <label>Total</label>
          <input
            type="text"
            name="total"
            value={values.total}
            onChange={handleChange}
          />

          <label>ID Empleado</label>
          <input
            type="text"
            name="idEmpleado"
            value={values.idEmpleado}
            onChange={handleChange}
          />

          <label>ID Cliente</label>
          <input
            type="text"
            name="idCliente"
            value={values.idCliente}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default OrderForm;
