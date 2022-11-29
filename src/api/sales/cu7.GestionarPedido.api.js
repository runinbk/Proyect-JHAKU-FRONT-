import axios from "axios";

export const getPedidosRequest = async () =>
  await axios.get("https://backend-si1-production.up.railway.app/pedido");

export const createPedidoRequest = async (pedido) =>
  await axios.post(
    "https://backend-si1-production.up.railway.app/pedido",
    pedido
  );

export const deletePedidoRequest = async (id) =>
  await axios.delete(
    `https://backend-si1-production.up.railway.app/pedido/${id}`
  );

export const getPedidoRequest = async (id) =>
  await axios.get(`https://backend-si1-production.up.railway.app/pedido/${id}`);

export const updatePedidoRequest = async (id, newFiles) =>
  await axios.put(
    `https://backend-si1-production.up.railway.app/pedido/${id}`,
    newFiles
  );
