import { useContext, useState } from "react";
import {
  getEmploysRequest,
  deleteEmployRequest,
  createEmployRequest,
  getEmployRequest,
  updateEmployRequest,
} from "../../../api/user/cu20.GestionarEmpleado.api";

import { EmployContext } from "./EmployContext";

export const useEmploy = () => {
  const context = useContext(EmployContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const EmployContextProvider = ({ children }) => {
  const [employs, setEmploys] = useState([]);
  //const [user, setUser] = useState({});

  const getEmploys = async () => {
    try {
      const response = await getEmploysRequest();
      setEmploys(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmploy = async (id) => {
    try {
      const response = await getEmployRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createEmploy = async (employ) => {
    try {
      const response = await createEmployRequest(employ);
      setEmploys([...employs, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmploy = async (id, newFields) => {
    try {
      const response = await updateEmployRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmploy = async (id) => {
    try {
      await deleteEmployRequest(id);
      setEmploys(employs.filter((employ) => employ.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployContext.Provider
      value={{
        employs,
        getEmploys,
        getEmploy,
        createEmploy,
        updateEmploy,
        deleteEmploy,
      }}
    >
      {children}
    </EmployContext.Provider>
  );
};
