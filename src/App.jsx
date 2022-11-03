import { Route, Routes } from "react-router-dom";

import UserPage from "./pages/user.pages/cu3.GestionarUsuario/UserPage";
import UserForm from "./pages/user.pages/cu3.GestionarUsuario/UserForm";
import { UserContextProvider } from "./context/user.context/cu3.GestionarUsuario/UserProvider";

import EmployPage from "./pages/user.pages/cu20.GestionarEmpleado/EmployPage";
import EmployForm from "./pages/user.pages/cu20.GestionarEmpleado/EmployForm";
import { EmployContextProvider } from "./context/user.context/cu20.GestionarEmpleado/EmployProvider";

import ClientPage from "./pages/sales.pages/cu5.GestionarClienes/ClientPage";
import ClientForm from "./pages/sales.pages/cu5.GestionarClienes/ClientForm";
import { ClientContextProvider } from "./context/sales.context/cu5.GestionarClientes/ClientProvider";

import ProductForm from "./pages/sales.pages/cu6.GestionarProducto/ProductForm";
import ProductPage from "./pages/sales.pages/cu6.GestionarProducto/ProductPage";
import { ProductContextProvider } from "./context/sales.context/cu6.GestionarProducto/ProductProvider";

import OrderPage from "./pages/sales.pages/cu7.GestionarPedido/OrderPage";
import OrderForm from "./pages/sales.pages/cu7.GestionarPedido/OrderForm";
import { OrderContextProvider } from "./context/sales.context/cu7.GestionarPedido/OrderProvider";

import DashboardCart from "./components/DashboardCart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <UserContextProvider>
          <Routes>
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/UserForm/edit/:id" element={<UserForm />} />
          </Routes>
        </UserContextProvider>
      </div>
      <div>
        <OrderContextProvider>
          <Routes>
            <Route path="/" element={<DashboardCart />} />
            <Route path="/OrderPage" element={<OrderPage />} />
            <Route path="/OrderForm" element={<OrderForm />} />
            <Route path="/OrderForm/edit/:id" element={<OrderForm />} />
          </Routes>
        </OrderContextProvider>
      </div>
      <div>
        <EmployContextProvider>
          <Routes>
            <Route path="/EmployPage" element={<EmployPage />} />
            <Route path="/EmployForm" element={<EmployForm />} />
            <Route path="/EmployForm/edit/:id" element={<EmployForm />} />
          </Routes>
        </EmployContextProvider>
      </div>
      <div>
        <ProductContextProvider>
          <Routes>
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ProductForm" element={<ProductForm />} />
            <Route path="/ProductForm/edit/:id" element={<ProductForm />} />
          </Routes>
        </ProductContextProvider>
      </div>
      <div>
        <ClientContextProvider>
          <Routes>
            <Route path="/ClientPage" element={<ClientPage />} />
            <Route path="/ClientForm" element={<ClientForm />} />
            <Route path="/ClientForm/edit/:id" element={<ClientForm />} />
          </Routes>
        </ClientContextProvider>
      </div>
    </div>
  );
}

export default App;
