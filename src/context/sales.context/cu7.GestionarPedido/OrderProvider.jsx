import { useContext, useState } from "react";
import {
  getPedidosRequest,
  createPedidoRequest,
  deletePedidoRequest,
  getPedidoRequest,
  updatePedidoRequest,
} from "../../../api/sales/cu7.GestionarPedido.api";

import { OrderContext } from "./OrderContext";

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await getPedidosRequest();
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getOrder = async (id) => {
    try {
      const response = await getPedidoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createOrder = async (order) => {
    try {
      const response = await createPedidoRequest(order);
      setOrders([...orders, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateOrder = async (id, newFields) => {
    try {
      const response = await updatePedidoRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await deletePedidoRequest(id);
      setOrders(orders.filter((order) => order.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    orders,
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
