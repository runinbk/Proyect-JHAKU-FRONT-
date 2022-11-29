import axios from "axios";

export const getProductosRequest = async () =>
  await axios.get("https://backend-si1-production.up.railway.app/producto");

export const createProductoRequest = async (producto) =>
  await axios.post(
    "https://backend-si1-production.up.railway.app/producto",
    producto
  );

export const deleteProductoRequest = async (id) =>
  await axios.delete(
    `https://backend-si1-production.up.railway.app/producto/${id}`
  );

export const getProductoRequest = async (id) =>
  await axios.get(
    `https://backend-si1-production.up.railway.app/producto/${id}`
  );

export const updateProductoRequest = async (id, newFiles) =>
  await axios.put(
    `https://backend-si1-production.up.railway.app/producto/${id}`,
    newFiles
  );
