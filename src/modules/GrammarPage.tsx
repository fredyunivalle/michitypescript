import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
}

interface Props {
  level: string;
}

const GrammarPage = ({ level }: Props) => {
  const [topics, setTopics] = useState<GrammarTopic[]>([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const topicsPerPage = 6;
  const grammarFiles = import.meta.glob('../data/grammar/*.json');

  useEffect(() => {
    const loadTopics = async () => {
      setTopics([]);
      setError(false);
      setCurrentPage(1); // Reiniciar a la primera página cuando cambia el nivel

      const fileKey = `../data/grammar/${level.toLowerCase()}.json`;
      const loader = grammarFiles[fileKey];

      if (!loader) {
        setError(true);
        return;
      }

      try {
        const module: any = await loader();
        setTopics(module.default);
      } catch (err) {
        console.error("Error loading topics:", err);
        setError(true);
      }
    };

    loadTopics();
  }, [level]);

  const indexOfLast = currentPage * topicsPerPage;
  const indexOfFirst = indexOfLast - topicsPerPage;
  const currentTopics = topics.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(topics.length / topicsPerPage);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{level} Grammar Topics</h2>

      {error && (
        <p className="text-danger">
          ⚠️ No grammar topics found for this level.
        </p>
      )}

      <div className="row">
        {currentTopics.map((topic, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{topic.title}</h5>
                <p className="card-text flex-grow-1">{topic.description}</p>
                <Link
                  to={`/${level.toLowerCase()}/grammar/${topic.slug}`}
                  className="btn btn-outline-primary mt-3"
                >
                  Start Lesson →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default GrammarPage;
