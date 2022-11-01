import axios from "axios";

export const getClientesRequest = async () =>
  await axios.get("http://localhost:4000/cliente");

export const createClienteRequest = async (cliente) =>
  await axios.post("http://localhost:4000/cliente", cliente);

export const deleteClienteRequest = async (id) =>
  await axios.delete(`http://localhost:4000/cliente/${id}`);

export const getClienteRequest = async (id) =>
  await axios.get(`http://localhost:4000/cliente/${id}`);

export const updateClienteRequest = async (id, newFiles) =>
  await axios.put(`http://localhost:4000/cliente/${id}`, newFiles);

// Path: src\api\sales\cu5.GestionarClientes.js
// Compare this snippet from src\api\user\cu20.GestionarEmpleado.api.js:
// import {
//   getEmploysRequest,
//   createEmployRequest,
//   deleteEmployRequest,
//   getEmployRequest,
//   updateEmployRequest,
// } from "./cu20.GestionarEmpleado.api";
//
// export const getEmploys = () => {
//   return (dispatch) => {
//     getEmploysRequest().then((response) => {
//       dispatch({
//         type: "GET_EMPLOYS",
//         payload: response.data,
//       });
//     });
//   };
// };
//
// export const createEmploy = (user) => {
//   return (dispatch) => {
//     createEmployRequest(user).then((response) => {
//       dispatch({
//         type: "CREATE_EMPLOY",
//         payload: response.data,
//       });
//     });
//   };
// };
//
// export const deleteEmploy = (id) => {
//   return (dispatch) => {
//     deleteEmployRequest(id).then((response) => {
//       dispatch({
//         type: "DELETE_EMPLOY",
//         payload: response.data,
//       });
//     });
//   };
// };
//
// export const getEmploy = (id) => {
//   return (dispatch) => {
//     getEmployRequest(id).then((response) => {
//       dispatch({
//         type: "GET_EMPLOY",
//         payload: response.data,
//       });
//     });
//   };
// };
//
// export const updateEmploy = (id, newFiles) => {
//   return (dispatch) => {
//     updateEmployRequest
