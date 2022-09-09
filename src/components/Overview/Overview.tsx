import styled from "styled-components";
import RatingsBlock from "./RatingsBlock/RatingsBlock";
import MediaBlock from "./MediaBlock/MediaBlock";
import poster from "../../images/poster.jpg";

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

  @media only screen and (max-width: 860px) {
    width: calc(100vw - 48px);
  }

  @media only screen and (max-width: 390px) {
    width: calc(100vw - 32px);
  }
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
  cursor: pointer;

  :hover {
    background-color: #363636;
  }
`;

const StyledGenreContainer = styled.div`
  display: flex;
  margin-bottom: 12px;

  @media only screen and (max-width: 860px) {
    flex-wrap: wrap;

    * {
      margin-top: 10px;
    }
  }
`;

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

  @media only screen and (max-width: 860px) {
    width: 100%;
  }
`;

const StyledStarsText = styled.div`
  font-weight: bold;
  margin-right: 12px;
`;

const StyledRatingsContainer = styled.div`
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledMobileRatingsContainer = styled.div`
  display: none;

  @media only screen and (max-width: 860px) {
    display: block;
  }
`;

const StyledPosterGenreContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 860px) {
    margin-bottom: 12px;
  }

  @media only screen and (max-width: 600px) {
    margin: 12px 0 24px 0;
  }
`;

const StyledPoster = styled.div`
  display: none;

  // @media only screen and (max-width: 860px) {
  //   display: block;
  //   margin-right: 16px;
  //   img {
  //     width: 230px;
  //     height: auto;
  //   }
  // }

  // @media only screen and (max-width: 600px) {
  //   img {
  //     width: calc(50vw - 100px);
  //     height: auto;

  //     min-width: 114px;
  //   }
  // }
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
          <StyledRatingsContainer>
            <RatingsBlock />
          </StyledRatingsContainer>
        </StyledInfoBar>
        <MediaBlock />
        <StyledOverviewTextContainer>
          <StyledPosterGenreContainer>
            <StyledPoster>
              <img src={poster} alt="movie poster" />
            </StyledPoster>
            <div>
              <StyledGenreContainer>
                <StyledGenrePill>Action</StyledGenrePill>
                <StyledGenrePill>Comedy</StyledGenrePill>
                <StyledGenrePill>Drama</StyledGenrePill>
                <StyledGenrePill>Romance</StyledGenrePill>
              </StyledGenreContainer>
              <div>
                Two unlikely lovers meet by chance and learn what it means to
                understand one another and themselves and ultimately find love.
                <br />
                <br />
                Happy Anniversary, Sam! I've loved loving you this year and look
                forward to all the adventures in <i>Two Years: The Sequel.</i>
              </div>
            </div>
          </StyledPosterGenreContainer>

          <StyledMobileRatingsContainer>
            <RatingsBlock />
          </StyledMobileRatingsContainer>
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
        </StyledOverviewTextContainer>
      </StyledSubContainer>
    </StyledContainer>
  );
};

export default Overview;
