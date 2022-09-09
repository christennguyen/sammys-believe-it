import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import TextCard from "../TextCard/TextCard";

const data = [
  {
    title: "Trivia",
    text: "Christen's first encounter with Sam was when she almost ran him over in a parking lot.",
  },
  {
    title: "Quote",
    text: "Permission to monch?",
  },
  { title: "Fun Fact", text: "Sam has remarkable toe grip strength." },
  {
    title: "Soundtracks",
    text: "Polo & Pan, Kate Bollinger, Lorde, Lord Huron, Leon Bridges",
  },
];
const DidYouKnow = () => {
  return (
    <SectionCard>
      <>
        <SectionHeader text="Did You Know" />
        {data.map((content, index) => (
          <TextCard
            key={`fact-card-${index}`}
            title={content.title}
            text={content.text}
          />
        ))}
      </>
    </SectionCard>
  );
};

export default DidYouKnow;
