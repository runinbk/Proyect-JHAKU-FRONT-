import axios from "axios";

// cambiar user por employ o empleado segun  corresponda

export const getEmploysRequest = async () =>
  await axios.get("https://backend-si1-production.up.railway.app/empleado");

export const createEmployRequest = async (user) =>
  await axios.post(
    "https://backend-si1-production.up.railway.app/empleado",
    user
  );

export const deleteEmployRequest = async (id) =>
  await axios.delete(
    `https://backend-si1-production.up.railway.app/empleado/${id}`
  );

export const getEmployRequest = async (id) =>
  await axios.get(
    `https://backend-si1-production.up.railway.app/empleado/${id}`
  );

export const updateEmployRequest = async (id, newFiles) =>
  await axios.put(
    `https://backend-si1-production.up.railway.app/empleado/${id}`,
    newFiles
  );
