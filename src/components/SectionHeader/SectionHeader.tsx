import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const StyledPill = styled.div`
  border: 2px solid #f5c518;
  border-radius: 10px;
  margin-right: 8px;
`;
interface ISectionHeader {
  text: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <StyledHeader>
      <StyledPill />
      <StyledTitle>{text}</StyledTitle>
    </StyledHeader>
  );
};
export default SectionHeader;
