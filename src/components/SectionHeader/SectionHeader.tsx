import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 6px solid #f5c518;
  border-radius: 2px;
`;

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

interface ISectionHeader {
  text: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <StyledHeader>
      <StyledTitle>{text}</StyledTitle>
    </StyledHeader>
  );
};
export default SectionHeader;
