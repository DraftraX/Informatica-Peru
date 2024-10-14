import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PaginaPrincipal from "./modules/Home/pages/PantallaPrincipal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PaginaPrincipal />} />
        {/* <Route path="/about" element={<h1>About</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
