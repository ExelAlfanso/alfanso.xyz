import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Parallax from "../pages/parallax";
export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Parallax />} path="/parallax" />
      <Route element={<Home />} path="/" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
