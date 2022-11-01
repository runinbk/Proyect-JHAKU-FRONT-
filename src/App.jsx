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
import ClientPage from "./pages/sales.pages/cu5.GestionarClienes/ClientPage";
import ClientForm from "./pages/sales.pages/cu5.GestionarClienes/ClientForm";
import { ClientContextProvider } from "./context/sales.context/cu5.GestionarClientes/ClientProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <ClientContextProvider>
          <Routes>
            <Route path="/" element={<ClientPage />} />
            <Route path="/form" element={<ClientForm />} />
            <Route path="/edit/:id" element={<ClientForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ClientContextProvider>
      </div>
    </div>
  );
}

export default App;
