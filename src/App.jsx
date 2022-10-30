import { Route, Routes } from "react-router-dom";

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

export default App;
