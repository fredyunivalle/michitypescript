import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SubtopicList from "./SubtopicList"; 

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

interface GrammarTopic {
  slug: string;
  title: string;
  description: string;
  subtopics?: Subtopic[];
  exercises?: any[];
}

const GrammarTopicPage = () => {
  const { level, topic } = useParams();
  const [topicData, setTopicData] = useState<GrammarTopic | null>(null);

  useEffect(() => {
    const grammarFiles = import.meta.glob("../../data/grammar/topics/**/*.json", {
      eager: true,
      import: "default",
    });

    const matched = Object.entries(grammarFiles).find(([path]) =>
      path.includes(`${level}/${topic}`)
    );

    if (matched) {
      setTopicData(matched[1] as GrammarTopic);
    } else {
      setTopicData(null);
    }
  }, [level, topic]);

  return (
    <div className="container mt-4">
      <h2>{level?.toUpperCase()} Grammar - {topic?.replace(/-/g, " ")}</h2>

      {topicData ? (
        <>
          <h4 className="mt-3">{topicData.title}</h4>
          <p>{topicData.description}</p>

          {topicData.subtopics && (
             <>
            <h5 className="mt-4">Subtopics</h5>
            <SubtopicList subtopics={topicData.subtopics} />
            </>            
          )}
        </>
      ) : (
        <p>This grammar topic is coming soon.</p>
      )}
    </div>
  );
};

export default GrammarTopicPage;

