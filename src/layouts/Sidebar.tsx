// src/components/layout/Sidebar.tsx
import { Offcanvas, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

interface Topic {
  id: string;
  name: string;
  path: string;
}

interface Level {
  level: string;
  topics: Topic[];
}

const Sidebar = ({ show, onClose }: SidebarProps) => {
  const levels: Level[] = [
    {
      level: "A1",
      topics: [
        { id: "a1-grammar", name: "Grammar", path: "/michinglishapp/a1/grammar" },
        { id: "a1-vocabulary", name: "Vocabulary", path: "/michinglishapp/a1/vocabulary" },
        { id: "a1-functional-skills", name: "Functional Skills", path: "/michinglishapp/a1/functional-skills" },
      ],
    },
    {
      level: "A2",
      topics: [
        { id: "a2-grammar", name: "Grammar", path: "/michinglishapp/a2/grammar" },
        { id: "a2-vocabulary", name: "Vocabulary", path: "/michinglishapp/a2/vocabulary" },
        { id: "a2-functional-skills", name: "Functional Skills", path: "/michinglishapp/a2/functional-skills" },
      ],
    },
    {
      level: "B1",
      topics: [
        { id: "b1-grammar", name: "Grammar", path: "/michinglishapp/b1/grammar" },
        { id: "b1-vocabulary", name: "Vocabulary", path: "/michinglishapp/b1/vocabulary" },
        { id: "b1-functional-skills", name: "Functional Skills", path: "/michinglishapp/b1/functional-skills" },
      ],
    },
    {
      level: "B2",
      topics: [
        { id: "b2-grammar", name: "Grammar", path: "/michinglishapp/b2/grammar" },
        { id: "b2-vocabulary", name: "Vocabulary", path: "/michinglishapp/b2/vocabulary" },
        { id: "b2-functional-skills", name: "Functional Skills", path: "/michinglishapp/b2/functional-skills" },
      ],
    },
    {
      level: "C1",
      topics: [
        { id: "c1-grammar", name: "Grammar", path: "/michinglishapp/c1/grammar" },
        { id: "c1-vocabulary", name: "Vocabulary", path: "/michinglishapp/c1/vocabulary" },
        { id: "c1-functional-skills", name: "Functional Skills", path: "/michinglishapp/c1/functional-skills" },
      ],
    },
    {
      level: "C2",
      topics: [
        { id: "c2-grammar", name: "Grammar", path: "/michinglishapp/c2/grammar" },
        { id: "c2-vocabulary", name: "Vocabulary", path: "/michinglishapp/c2/vocabulary" },
        { id: "c2-functional-skills", name: "Functional Skills", path: "/michinglishapp/c2/functional-skills" },
      ],
    },
  ];

  const vocabularyCategories = {
    basic: "Basic Vocabulary",
    intermediate: "Intermediate Vocabulary",
    advanced: "Advanced Vocabulary",
  } as const;

  type CategoryKey = keyof typeof vocabularyCategories;

  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-4 fw-bold">
          <i className="fa-solid fa-comment-dots me-2"></i>
          English Levels
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {levels.map((level) => (
          <div key={level.level} className="mb-4">
            <p className="text-muted fs-5 fw-semibold">
              <i className="fa-solid fa-podcast me-2"></i>
              {level.level}
            </p>
            <ListGroup variant="flush">
              {level.topics.map((topic) => (
                <ListGroup.Item key={topic.id}>
                  <Link to={topic.path} onClick={onClose} className="text-decoration-none">
                    {topic.name}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ))}
        <hr />
        <ListGroup.Item className="bg-warning fw-bold text-dark">
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>
          Vocabulary Puzzle
        </ListGroup.Item>
        {(Object.keys(vocabularyCategories) as CategoryKey[]).map((category) => (
          <ListGroup.Item key={category}>
            <Link
              to={`/michinglishapp/vocabularypuzzle/${category}`}
              onClick={onClose}
              className="text-decoration-none"
            >
              {vocabularyCategories[category]}
            </Link>
          </ListGroup.Item>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;