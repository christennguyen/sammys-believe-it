import { useState } from "react";
import styled from "styled-components";
import { SectionCard } from "../../styles";
import starIcon from "../../images/icons/star.svg";
import thumbsUpIcon from "../../images/icons/thumbsUp.svg";
import thumbsDownIcon from "../../images/icons/thumbsDown.svg";
import SectionHeader from "../SectionHeader/SectionHeader";

const StyledReview = styled.div`
  padding: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const StyledFeatureText = styled.div`
  border: 0px solid #f5c518;
  background-color: #f5c518;
  padding: 4px 8px;
  border-radius: 4px;
  color: black;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 12px;
`;

const StyledRatingsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDividend = styled.div`
  color: #808080;
`;

const StyledDivisor = styled.div`
  color: #a8a8a8;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  width: 174px;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 8px;
`;

const StyledUserName = styled.div`
  color: #0e62be;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const StyledRatingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92px;
  margin-right: 16px;
`;

const StyledHelpfulContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const StyledThumbs = styled.img`
  cursor: pointer;
  height: 24px;
  margin-right: 8px;
`;
const ReviewsSection = () => {
  const [helpfulCounter, setHelpfulCounter] = useState(329);

  const markHelpful = () => {
    setHelpfulCounter(helpfulCounter + 1);
  };
  return (
    <SectionCard>
      <SectionHeader text="User Reviews" />
      <StyledReview>
        <StyledHeader>
          <StyledFeatureText>FEATURED REVIEW</StyledFeatureText>

          <StyledRatingsContainer>
            <img
              src={starIcon}
              alt="star"
              style={{ marginRight: "4px" }}
              height="14px"
            />
            <StyledDividend>10</StyledDividend>
            <StyledDivisor>/10</StyledDivisor>
          </StyledRatingsContainer>
        </StyledHeader>
        <StyledTitle>
          If I Could Rate in Decimals, It Would Still be a 10.0
        </StyledTitle>
        My favorite film this year! Would watch again and again. Sam is my
        absolute favorite character! He's so kind and patient with Christen.
        <br />
        <br />I loved all the action but appreciated the balance of serious and
        meaningful dialog while being hilarious and light-hearted! Perfect film,
        no notes!
        <StyledHelpfulContainer>
          <div onClick={markHelpful}>
            <StyledThumbs src={thumbsUpIcon} alt="thumbs up" />
          </div>
          <StyledRatingInfo>
            <div onClick={markHelpful}>helpful</div> &#8226;{" "}
            <div>{helpfulCounter}</div>
          </StyledRatingInfo>
          <StyledThumbs src={thumbsDownIcon} alt="thumbs down" />
          <div>1</div>
        </StyledHelpfulContainer>
      </StyledReview>
      <StyledInfoContainer>
        <StyledUserName>localman123</StyledUserName> &#8226;{" "}
        <div>Sep 9, 2022</div>
      </StyledInfoContainer>
    </SectionCard>
  );
};

export default ReviewsSection;
