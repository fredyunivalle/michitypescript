import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LevelPage from "./pages/LevelPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:level/:category" element={<LevelPage />} />
    </Routes>
  );
};

export default AppRoutes;
