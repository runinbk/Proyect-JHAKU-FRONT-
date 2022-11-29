import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get("https://backend-si1-production.up.railway.app/usuario");

export const createUserRequest = async (user) =>
  await axios.post(
    "https://backend-si1-production.up.railway.app/usuario",
    user
  );

export const deleteUserRequest = async (id) =>
  await axios.delete(
    `https://backend-si1-production.up.railway.app/usuario/${id}`
  );

export const getUserRequest = async (id) =>
  await axios.get(
    `https://backend-si1-production.up.railway.app/usuario/${id}`
  );

export const updateUserRequest = async (id, newFiles) =>
  await axios.put(
    `https://backend-si1-production.up.railway.app/usuario/${id}`,
    newFiles
  );
