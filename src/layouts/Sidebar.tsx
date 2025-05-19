import { Offcanvas, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
const topics = ["grammar", "vocabulary", "functional-skills"];

const vocabularyCategories = {
  basic: "Basic Vocabulary",
  intermediate: "Intermediate Vocabulary",
  advanced: "Advanced Vocabulary",
} as const;

type CategoryKey = keyof typeof vocabularyCategories;

const Sidebar = ({ show, onClose }: SidebarProps) => {
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
          <div key={level} className="mb-4">
            <p className="text-muted fs-5 fw-semibold">
              <i className="fa-solid fa-podcast me-2"></i>
              {level}
            </p>
            <ListGroup variant="flush">
              {topics.map((topic) => (
                <ListGroup.Item key={`${level}-${topic}`}>
                  <Link
                    to={`/${level.toLowerCase()}/${topic}`}
                    onClick={onClose}
                    className="text-decoration-none"
                  >
                    {topic.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
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
              to={`/vocabularypuzzle/${category}`}
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