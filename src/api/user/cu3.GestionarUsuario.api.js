import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get("http://localhost:4000/usuario");

export const createUserRequest = async (user) =>
  await axios.post("http://localhost:4000/usuario", user);

export const deleteUserRequest = async (id) =>
  await axios.delete(`http://localhost:4000/usuario/${id}`);

export const getUserRequest = async (id) =>
  await axios.get(`http://localhost:4000/usuario/${id}`);

export const updateUserRequest = async (id, newFiles) =>
  await axios.put(`http://localhost:4000/usuario/${id}`, newFiles);
