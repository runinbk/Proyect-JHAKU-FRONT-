import { useContext, useState } from "react";
import {
  getProductosRequest,
  createProductoRequest,
  deleteProductoRequest,
  getProductoRequest,
  updateProductoRequest,
} from "../../../api/sales/cu6.GestionarProducto";
import { ProductContext } from "./ProductContext";

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getProductosRequest();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const response = await getProductoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createProduct = async (product) => {
    try {
      const response = await createProductoRequest(product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id, newFields) => {
    try {
      const response = await updateProductoRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductoRequest(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
