import { Route, Routes } from "react-router-dom";

import UserPage from "../src/pages/UserPage";
import UserForm from "../src/pages/UserForm";
import NotFound from "../src/pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
