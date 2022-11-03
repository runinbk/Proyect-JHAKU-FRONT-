import { useEffect, useState } from "react";
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

  return (
    <div className="bg-slate-300 max-w-lg rounded-md p-4 mx-auto mt-10">
      <div className="p-0">{renderMain()}</div>
    </div>
  );
}

export default ProductPage;
