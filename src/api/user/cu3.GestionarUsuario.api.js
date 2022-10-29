import axios from "axios";

export const getUserRequest = async () =>
  await axios.get("http://localhost:4000/usuario");

export const createUserRequest = async (user) =>
  await axios.post("http://localhost:4000/usuario", user);

export const deleteUserRequest = async (id) =>
  await axios.delete(`http://localhost:4000/usuario/${id}`);
