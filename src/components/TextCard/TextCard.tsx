import styled from "styled-components";

const StyledTitle = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  padding: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-bottom: 4px;
  cursor: pointer;

  :hover ${StyledTitle} {
    color: grey;
  }
`;

interface ITextCard {
  title: string;
  text: string;
}

const StyledText = styled.p`
  margin: 0;
`;
const TextCard: React.FC<ITextCard> = ({ title, text }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};

export default TextCard;
