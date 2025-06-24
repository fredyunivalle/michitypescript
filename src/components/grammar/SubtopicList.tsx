import { Accordion } from "react-bootstrap";

interface Example {
  marker: string;
  explanation: string;
  sample: string;
}

interface Subtopic {
  title: string;
  description: string;
  examples: Example[];
}

interface Props {
  subtopics: Subtopic[];
}

const SubtopicList = ({ subtopics }: Props) => {
  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      {subtopics.map((sub, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={idx}>
          <Accordion.Header>{sub.title}</Accordion.Header>
          <Accordion.Body>
            <p>{sub.description}</p>
            <ul>
              {sub.examples.map((ex, i) => (
                <li key={i} className="mb-2">
                  <strong>{ex.marker}</strong>: {ex.explanation}
                  <br />
                  <em>Example:</em> "{ex.sample}"
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SubtopicList;
