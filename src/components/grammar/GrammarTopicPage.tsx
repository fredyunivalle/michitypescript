import { useParams } from "react-router-dom";

const GrammarTopicPage = () => {
  const { level, topic } = useParams();

  return (
    <div className="container mt-4">
      <h2>{level?.toUpperCase()} Grammar - {topic?.replace(/-/g, " ")}</h2>
      <p>Aquí mostrarías las actividades del tema: {topic}</p>
      {/* Puedes cargar dinámicamente otro JSON si lo necesitas */}
    </div>
  );
};

export default GrammarTopicPage;