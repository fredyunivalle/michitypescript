import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LevelPage from "./pages/LevelPage";
import GrammarTopicPage from "./components/grammar/GrammarTopicPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:level/:category" element={<LevelPage />} />
       <Route path="/:level/grammar/:topic" element={<GrammarTopicPage />} />
    </Routes>
  );
};

export default AppRoutes;
