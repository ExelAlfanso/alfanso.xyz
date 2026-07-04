import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
