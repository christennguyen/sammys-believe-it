import styled from "styled-components";
import star from "../../../images/icons/star.svg";
import starOutline from "../../../images/icons/star-outline.svg";
import trending from "../../../images/icons/trending.svg";

const StyledRatingsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 30px;
`;

const StyledRatingBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  color: #c4c4c4;
  font-size: 12px;
  letter-spacing: 1.2px;
  font-weight: bold;
`;

const StyledRatingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`;

const StyledYourRatingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const StyledTrendingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StyledRating = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const StyledRateText = styled.div`
  color: #5799ef;
  font-size: 20px;
  font-weight: bold;
`;

const StyledDivisor = styled.div`
  color: #c4c4c4;
  font-size: 16px;
  font-weight: normal;
`;

const StyledFraction = styled.div`
  display: flex;
  align-items: flex-end;
`;
const StyledQuantity = styled.div`
  color: #c4c4c4;
  font-size: 12px;
  font-weight: normal;
`;

const StyledRatingColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const RatingsBlock = () => {
  return (
    <StyledRatingsContainer>
      <StyledRatingBlock>
        <div>IMDb RATING</div>
        <StyledRatingContent>
          <img
            src={star}
            alt="star"
            height="24px"
            style={{ marginRight: "8px" }}
          />
          <StyledRatingColumn>
            <StyledFraction>
              <StyledRating>10</StyledRating>
              <StyledDivisor>/10</StyledDivisor>
            </StyledFraction>
            <StyledQuantity>4.6M</StyledQuantity>
          </StyledRatingColumn>
        </StyledRatingContent>
      </StyledRatingBlock>
      <StyledRatingBlock>
        <div>YOUR RATING</div>
        <StyledYourRatingContent>
          <img
            src={starOutline}
            alt="star outline"
            height="24px"
            style={{ marginRight: "8px" }}
          />
          <StyledRateText>Rate</StyledRateText>
        </StyledYourRatingContent>
      </StyledRatingBlock>
      <StyledRatingBlock>
        <div>POPULARITY</div>
        <StyledTrendingContent>
          <img
            src={trending}
            alt="star outline"
            height="30px"
            style={{ marginRight: "7px" }}
          />
          <StyledRating>10</StyledRating>
        </StyledTrendingContent>
      </StyledRatingBlock>
    </StyledRatingsContainer>
  );
};

export default RatingsBlock;