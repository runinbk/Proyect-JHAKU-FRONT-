import { useProduct } from "../context/sales.context/cu6.GestionarProducto/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <div className="p-1">
      <div className="bg-slate-400 text-black  rounded-md p-4">
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">{product.nombre}</h1>
        </header>

        <h2 className="text-sm font-bold">{product.precio}</h2>
        <h2 className="text-sm font-bold">{product.cantidad}</h2>
        <h2 className="text-sm font-bold">{product.descripcion}</h2>

        <h2 className="text-sm font-bold">{product.id}</h2>
        <div>
          <button
            className="bg-lime-400 px-2 py-1 text-black rounded-md"
            onClick={() => navigate(`/edit/${product.id}`)}
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
