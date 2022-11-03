import { useNavigate } from "react-router-dom";

function DashboardCart() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 p-20 py-20 gap-20">
      <div
        onClick={() => navigate(`/UserPage`)}
        className="bg-amber-600 text-white  rounded-md p-4"
      >
        <header className="flex justify-between ">
          <h1 className="text-center  font-bold">Usuarios</h1>
        </header>
      </div>

      <div
        onClick={() => navigate(`/ClientPage`)}
        className="bg-amber-600 text-white rounded-md p-4"
      >
        <header className="flex justify-between">
          <h1 className="text-sm font-bold">Ventas</h1>
        </header>
      </div>
    </div>
  );
}

export default DashboardCart;
