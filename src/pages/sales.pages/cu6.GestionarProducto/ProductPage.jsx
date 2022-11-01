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
    <div>
      <h1>Products</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default ProductPage;
