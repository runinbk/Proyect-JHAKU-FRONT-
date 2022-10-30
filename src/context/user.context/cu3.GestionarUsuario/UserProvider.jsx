import { useContext, useState } from "react";
import {
  getUsersRequest,
  deleteUserRequest,
  createUserRequest,
  getUserRequest,
  updateUserRequest,
} from "../../../api/user/cu3.GestionarUsuario.api";

import { UserContext } from "./UserContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({});

  const getUsers = async () => {
    try {
      const response = await getUsersRequest();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await getUserRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (user) => {
    try {
      const response = await createUserRequest(user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, newFields) => {
    try {
      const response = await updateUserRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await deleteUserRequest(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
