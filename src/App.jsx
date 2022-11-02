import { Route, Routes } from "react-router-dom";
/*
import UserPage from "./pages/user.pages/cu3.GestionarUsuario/UserPage";
import UserForm from "./pages/user.pages/cu3.GestionarUsuario/UserForm";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./context/user.context/cu3.GestionarUsuario/UserProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/edit/:id" element={<UserForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContextProvider>
      </div>
    </div>
  );
}
*/
//import EmployPage from "./pages/user.pages/cu20.GestionarEmpleado/EmployPage"
//import EmployForm from "./pages/user.pages/cu20.GestionarEmpleado/EmployForm"
import NotFound from "./pages/NotFound";
//import { EmployContextProvider } from "./context/user.context/cu20.GestionarEmpleado/EmployProvider";

//import ClientPage from "./pages/sales.pages/cu5.GestionarClienes/ClientPage";
//import ClientForm from "./pages/sales.pages/cu5.GestionarClienes/ClientForm";
//import { ClientContextProvider } from "./context/sales.context/cu5.GestionarClientes/ClientProvider";

import OrderPage from "./pages/sales.pages/cu7.GestionarPedido/OrderPage";
import OrderForm from "./pages/sales.pages/cu7.GestionarPedido/OrderForm";
import { OrderContextProvider } from "./context/sales.context/cu7.GestionarPedido/OrderProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <OrderContextProvider>
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/form" element={<OrderForm />} />
            <Route path="/edit/:id" element={<OrderForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </OrderContextProvider>
      </div>
    </div>
  );
}

export default App;
