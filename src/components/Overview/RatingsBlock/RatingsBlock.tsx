import { useState } from "react";
import styled from "styled-components";
import star from "../../../images/icons/star.svg";
import starOutline from "../../../images/icons/star-outline.svg";
import trending from "../../../images/icons/trending.svg";

const StyledRatingsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 30px;

  @media only screen and (max-width: 860px) {
    padding-top: 0px;
    width: 273px;
    justify-content: space-between;
    height: 28px;
  }
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

  :hover {
    cursor: pointer;
    background-color: #363636;
    border-radius: 4px;
  }

  @media only screen and (max-width: 860px) {
    margin-top: 2px;

    :hover {
      margin-top: -4px;
      padding: 8px;
    }
  }
`;

const StyledYourRatingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  :hover {
    cursor: pointer;
    background-color: #363636;
    border-radius: 4px;
    padding: 8px;
    margin-top: 3px;
  }

  @media only screen and (max-width: 860px) {
    margin-top: 2px;

    :hover {
      margin-top: -4px;
    }
  }
`;

const StyledTrendingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    background-color: #363636;
    border-radius: 4px;
    padding: 5px;
    margin-top: 2px;
  }

  @media only screen and (max-width: 860px) {
    margin-top: 0px;

    :hover {
      margin-top: -3px;
      padding: 6.5px;
    }
  }
`;

const StyledRating = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 860px) {
    font-size: 16px;
  }
`;

const StyledRateText = styled.div`
  color: #5799ef;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 860px) {
    font-size: 16px;
  }
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

  @media only screen and (max-width: 860px) {
    font-size: 16px;
  }
`;

const StyledRatingColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 860px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledRatingsHeader = styled.div`
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledStarIcon = styled.img`
  height: 24px;

  @media only screen and (max-width: 860px) {
    height: 17px;
  }
`;

const StyledTrendingIcon = styled.img`
  height: 30px;

  @media only screen and (max-width: 860px) {
    height: 22px;
  }
`;
const RatingsBlock = () => {
  const [showRating, setShowRating] = useState(false);

  const toggleShowRating = () => {
    setShowRating(!showRating);
  };
  return (
    <StyledRatingsContainer>
      <StyledRatingBlock>
        <StyledRatingsHeader>IMDb RATING</StyledRatingsHeader>
        <StyledRatingContent>
          <StyledStarIcon
            src={star}
            alt="star"
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
        <StyledRatingsHeader>YOUR RATING</StyledRatingsHeader>
        <StyledYourRatingContent onClick={toggleShowRating}>
          {showRating ? (
            <>
              <StyledStarIcon
                src={star}
                alt="star"
                style={{ marginRight: "8px" }}
              />
              <StyledRating>10</StyledRating>
            </>
          ) : (
            <>
              <StyledStarIcon
                src={starOutline}
                alt="star outline"
                style={{ marginRight: "8px" }}
              />
              <StyledRateText>Rate</StyledRateText>
            </>
          )}
        </StyledYourRatingContent>
      </StyledRatingBlock>
      <StyledRatingBlock>
        <StyledRatingsHeader>POPULARITY</StyledRatingsHeader>
        <StyledTrendingContent>
          <StyledTrendingIcon
            src={trending}
            alt="star outline"
            style={{ marginRight: "7px" }}
          />
          <StyledRating>10</StyledRating>
        </StyledTrendingContent>
      </StyledRatingBlock>
    </StyledRatingsContainer>
  );
};

export default RatingsBlock;
