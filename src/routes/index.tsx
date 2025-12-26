import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Parallax from "../pages/Parallax";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parallax" element={<Parallax />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
