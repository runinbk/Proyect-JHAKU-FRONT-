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
        <Form
          className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10  todo-app"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold uppercase text-center">
            {params.id ? "Editar Pedido" : "Crear Pedido"}
          </h1>

          <div className="mt-4">
            <label className="block">Detalle</label>
            <input
              type="text"
              name="detalle"
              value={values.detalle}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Fecha</label>
            <input
              type="text"
              name="fecha"
              value={values.fecha}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Fecha de Entrega</label>
            <input
              type="text"
              name="fechaEntrega"
              value={values.fechaEntrega}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">Total</label>
            <input
              type="text"
              name="total"
              value={values.total}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">ID Empleado</label>
            <input
              type="text"
              name="idEmpleado"
              value={values.idEmpleado}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <label className="block">ID Cliente</label>
            <input
              type="text"
              name="idCliente"
              value={values.idCliente}
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OrderForm;
