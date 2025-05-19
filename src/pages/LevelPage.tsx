import { useParams } from "react-router-dom";
import GrammarPage from "../modules/GrammarPage";
import VocabularyPage from "../modules/VocabularyPage";
import FunctionalSkillsPage from "../modules/FunctionalSkillsPage";
const validLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
const validCategories = ["grammar", "vocabulary", "functional-skills"];

const LevelPage = () => {
  const { level, category } = useParams();


  const formattedLevel = level?.toUpperCase();

  const isValidLevel = validLevels.includes(formattedLevel || "");
  const isValidCategory = validCategories.includes(category || "");

  if (!isValidLevel || !isValidCategory) {
    return (
      <div className="container mt-4 text-center">
        <h2>⚠️ Page not found</h2>
        <p>Make sure the level and category in the URL are valid.</p>
      </div>
    );
  }

  // Renderiza el componente correspondiente
  switch (category) {
    case "grammar":
      return <GrammarPage level={formattedLevel!} />;
    case "vocabulary":
      return <VocabularyPage level={formattedLevel!} />;
    case "functional-skills":
      return <FunctionalSkillsPage level={formattedLevel!} />;
    default:
      return null;
  }
};

export default LevelPage;
