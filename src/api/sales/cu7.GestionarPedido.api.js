import axios from "axios";

export const getPedidosRequest = async () =>
  await axios.get("http://localhost:4000/pedido");

export const createPedidoRequest = async (pedido) =>
  await axios.post("http://localhost:4000/pedido", pedido);

export const deletePedidoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/pedido/${id}`);

export const getPedidoRequest = async (id) =>
  await axios.get(`http://localhost:4000/pedido/${id}`);

export const updatePedidoRequest = async (id, newFiles) =>
  await axios.put(`http://localhost:4000/pedido/${id}`, newFiles);
