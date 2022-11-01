import axios from "axios";

export const getProductosRequest = async () =>
  await axios.get("http://localhost:4000/producto");

export const createProductoRequest = async (producto) =>
  await axios.post("http://localhost:4000/producto", producto);

export const deleteProductoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/producto/${id}`);

export const getProductoRequest = async (id) =>
  await axios.get(`http://localhost:4000/producto/${id}`);

export const updateProductoRequest = async (id, newFiles) =>
  await axios.put(`http://localhost:4000/producto/${id}`, newFiles);
