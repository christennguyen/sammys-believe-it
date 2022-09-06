import styled from "styled-components";
import RatingsBlock from "./RatingsBlock/RatingsBlock";
import MediaBlock from "./MediaBlock/MediaBlock";

const StyledContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledSubContainer = styled.div`
  width: 845px;
  padding: 20px 0 30px 0;
`;

const StyledTitleContainer = styled.div``;

const StyledInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledHeader = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: normal;
  line-height: 4px;
`;

const StyledMovieInfo = styled.div`
  font-size: 14px;
  color: #c4c4c4;
`;

const StyledGenrePill = styled.div`
  border: 2px solid grey;
  border-radius: 16px;
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 14px;
`;

const StyledGenreContainer = styled.div`
  display: flex;
  margin: 12px 0;
`;
const StyledInfoContainer = styled.div``;

const StyledDivider = styled.div`
  border-bottom: 1px solid grey;
  width: 500px;
  margin: 14px 0;
`;

const StyledActorLinks = styled.div`
  color: #5799ef;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const StyledRow = styled.div`
  display: flex;
`;

const StyledActors = styled.div`
  display: flex;
  width: 248px;
  justify-content: space-between;
`;

const StyledOverviewTextContainer = styled.div`
  width: 533px;
`;

const StyledStarsText = styled.div`
  font-weight: bold;
  margin-right: 12px;
`;
const Overview = () => {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledInfoBar>
          <StyledTitleContainer>
            <StyledHeader>One Year</StyledHeader>
            <StyledMovieInfo>2022 &#8226; PG &#8226; 8760h 0m</StyledMovieInfo>
          </StyledTitleContainer>
          <RatingsBlock />
        </StyledInfoBar>
        <MediaBlock />
        <StyledOverviewTextContainer>
          <StyledGenreContainer>
            <StyledGenrePill>Action</StyledGenrePill>
            <StyledGenrePill>Comedy</StyledGenrePill>
            <StyledGenrePill>Drama</StyledGenrePill>
            <StyledGenrePill>Romance</StyledGenrePill>
          </StyledGenreContainer>
          <StyledInfoContainer>
            <div>
              Two unlikely lovers meet by chance and learn what it means to
              understand one another and themselves and ultimately find love.
              <br />
              <br />
              Happy Anniversary, Sam! I've loved loving you this year and look
              forward to all the adventures in <i>Two Years: The Sequel.</i>
            </div>
            <StyledDivider />
            <div>
              <StyledRow>
                <StyledStarsText>Stars</StyledStarsText>
                <StyledActors>
                  <StyledActorLinks>Sam Mathison</StyledActorLinks> &#8226;{" "}
                  <StyledActorLinks>Christen Nguyen</StyledActorLinks>
                </StyledActors>
              </StyledRow>
            </div>
          </StyledInfoContainer>
        </StyledOverviewTextContainer>
      </StyledSubContainer>
    </StyledContainer>
  );
};

export default Overview;
