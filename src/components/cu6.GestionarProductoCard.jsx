import { useProduct } from "../context/sales.context/cu6.GestionarProducto/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>{product.nombre}</h1>
      </header>

      <h2>{product.precio}</h2>
      <h2>{product.cantidad}</h2>
      <h2>{product.descripcion}</h2>

      <h2>{product.id}</h2>
      <div>
        <button onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
