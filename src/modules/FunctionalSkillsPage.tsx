interface FunctionalSkillsPageProps {
  level: string;
  content?: React.ReactNode;
}

const FunctionalSkillsPage = ({ level, content }: FunctionalSkillsPageProps) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">{level} Functional Skills</h2>
      {content ? (
        content
      ) : (
        <>
          <p>
            This section focuses on real-life communication skills suitable for level <strong>{level}</strong>, such as:
          </p>
          <ul>
            <li>Introducing yourself and asking questions</li>
            <li>Giving directions or suggestions</li>
            <li>Making plans and requesting help</li>
            <li>Expressing opinions and preferences</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default FunctionalSkillsPage;