import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../components/cu6.GestionarProductoCard";
import { useProduct } from "../../../context/sales.context/cu6.GestionarProducto/ProductProvider";

function ProductPage() {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  function renderMain() {
    if (products.length === 0) return <h1>No products yet</h1>;
    return products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  }

  const navigate = useNavigate();

  return (
    <div className="  todo-app">
      <h2 className="text-2xl font-bold text-center p-2">Productos</h2>
      <div>
        <button
          className="bg-lime-400 p-2 px-2 py-1 text-black rounded-md m-2"
          onClick={() => navigate(`/ProductForm`)}
        >
          Crear
        </button>
      </div>
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default ProductPage;
