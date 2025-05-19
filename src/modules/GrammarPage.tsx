interface GrammarPageProps {
  level: string;
  content?: React.ReactNode;
}

const GrammarPage = ({ level, content }: GrammarPageProps) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">{level} Grammar</h2>
      {content ? (
        content
      ) : (
        <>
          <p>
            This grammar section for level <strong>{level}</strong> includes key concepts such as:
          </p>
          <ul>
            <li>Verb tenses appropriate for this level</li>
            <li>Sentence structure</li>
            <li>Questions and negations</li>
            <li>Articles, pronouns, and connectors</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default GrammarPage;