import axios from "axios";

// cambiar user por employ o empleado segun  corresponda

export const getEmploysRequest = async () =>
  await axios.get("http://localhost:3000/empleado");

export const createEmployRequest = async (user) =>
  await axios.post("http://localhost:3000/empleado", user);

export const deleteEmployRequest = async (id) =>
  await axios.delete(`http://localhost:3000/empleado/${id}`);

export const getEmployRequest = async (id) =>
  await axios.get(`http://localhost:3000/empleado/${id}`);

export const updateEmployRequest = async (id, newFiles) =>
  await axios.put(`http://localhost:3000/empleado/${id}`, newFiles);
