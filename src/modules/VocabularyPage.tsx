interface VocabularyPageProps {
  level: string;
  content?: React.ReactNode;
}

const VocabularyPage = ({ level, content }: VocabularyPageProps) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">{level} Vocabulary</h2>
      {content ? (
        content
      ) : (
        <>
          <p>
            This vocabulary section for level <strong>{level}</strong> includes:
          </p>
          <ul>
            <li>Thematic vocabulary lists (e.g., food, travel, emotions)</li>
            <li>Common expressions and collocations</li>
            <li>Word formation and categories (nouns, verbs, adjectives)</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default VocabularyPage;