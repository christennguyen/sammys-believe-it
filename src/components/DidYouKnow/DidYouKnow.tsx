import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import TextCard from "../TextCard/TextCard";

const data = [
  {
    title: "Trivia",
    text: "Christen first saw Sam when she almost ran him over with her car.",
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
        {data.map((content) => (
          <TextCard title={content.title} text={content.text} />
        ))}
      </>
    </SectionCard>
  );
};

export default DidYouKnow;
