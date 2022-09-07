import styled from "styled-components";
import arrowIcon from "../../images/icons/arrowRight.svg";

const StyledMainText = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const StyledInfoCard = styled.div`
  border: 1px solid #f5c518;
  border-radius: 4px;
  margin: 10px 0 10px 0;
  padding: 12px;
  display: flex;
  position: relative;
  cursor: pointer;

  :hover ${StyledMainText} {
    color: grey;
  }
`;

const StyledTrapezoid = styled.div`
  border-bottom: 48px solid #f5c518;
  border-left: 15px solid transparent;
  border-right: 0px solid transparent;
  height: 0;
  width: 30px;
  transform: rotate(180deg);
  position: absolute;
  top: 0px;
  left: 0;
`;

const StyledText = styled.div`
  margin-left: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledTextContainer = styled.div`
  display: flex;
`;
const AwardsCard = () => {
  return (
    <StyledInfoCard>
      <StyledTrapezoid />
      <StyledText>
        <StyledTextContainer>
          <StyledMainText>Won 2 Oscars</StyledMainText> 12 wins & 7 nominations
          total
        </StyledTextContainer>
        <img src={arrowIcon} alt="arrow icon" height="24px" />
      </StyledText>
    </StyledInfoCard>
  );
};

export default AwardsCard;
