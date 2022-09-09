import styled from "styled-components";
import arrowIcon from "../../images/icons/arrowRight.svg";

const StyledMainText = styled.div`
  font-weight: bold;
  margin-right: 10px;

  @media only screen and (max-width: 860px) {
    margin-bottom: 8px;
  }
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

  @media only screen and (max-width: 860px) {
    flex-direction: column;
    padding: 16px;
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

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledRectangle = styled.div`
  display: none;

  @media only screen and (max-width: 860px) {
    display: block;
    height: 25px;
    width: 100%;
    background-color: #f5c518;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledText = styled.div`
  margin-left: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 860px) {
    margin: 24px 0 0 0;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }
`;
const AwardsCard = () => {
  return (
    <StyledInfoCard>
      <StyledTrapezoid />
      <StyledRectangle />
      <StyledText>
        <StyledTextContainer>
          <StyledMainText>Won 2 Oscars</StyledMainText>
          <div>12 wins & 7 nominations total</div>
        </StyledTextContainer>
        <img src={arrowIcon} alt="arrow icon" height="24px" />
      </StyledText>
    </StyledInfoCard>
  );
};

export default AwardsCard;
