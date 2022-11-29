import { useProduct } from "../context/sales.context/cu6.GestionarProducto/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <div class="container overflow-hidden text-center">
      <div class="todo-row">
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">{product.nombre}</h1>
        </header>

        <h2 className="text-sm font-bold">{product.precio}</h2>
        <h2 className="text-sm font-bold">{product.cantidad}</h2>
        <h2 className="text-sm font-bold">{product.descripcion}</h2>

        <h2 className="text-sm font-bold">{product.id}</h2>
        <div className="flex gap-x-1">
          <button
            className="bg-lime-400 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/ProductForm/edit/${product.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-black rounded-md"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
