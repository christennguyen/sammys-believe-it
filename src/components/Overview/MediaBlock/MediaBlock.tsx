import { useState } from "react";
import styled from "styled-components";
import poster from "../../../images/poster.jpg";
import osl from "../../../images/osl.jpg";
import videoIcon from "../../../images/icons/videos.svg";
import photoIcon from "../../../images/icons/photos.svg";
import playIcon from "../../../images/icons/play-circle.svg";
import detailsIcons from "../../../images/icons/details.svg";
import PhotoCard from "../../PhotoCard/PhotoCard";

const StyledImagesContainer = styled.div`
  display: flex;
  margin: 18px 0;

  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 390px) {
    margin: 18px -16px;
  }
`;

const StyledImageContainer = styled.div`
  margin-right: 4px;

  img {
    height: 329px;
  }

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledMovieContainer = styled.div`
  margin-right: 4px;
  position: relative;

  img {
    height: 329px;
  }

  @media only screen and (max-width: 860px) {
    margin-right: 0px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 390px) {
    width: calc(100vw);
  }
`;

const StyledPhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTopPhotoCard = styled.div`
  margin-bottom: 4px;
`;

const StyledPlayButtonContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 45%;
  bottom: 42%;

  img {
    height: 66px;
    width: 66px;
    cursor: pointer;
  }

  @media only screen and (max-width: 860px) {
    left: 8px;
    bottom: 8px;
  }

  @media only screen and (max-width: 450px) {
    img {
      height: 48px;
      width: 48px;
    }
  }
`;

const StyledDetailButtonContainer = styled.div`
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 8px;

  img {
    height: 28px;
    cursor: pointer;
  }
`;

const StyledPlayCaption = styled.div`
  color: white;
  position: absolute;
  left: 138px;
  bottom: 35px;

  @media only screen and (max-width: 860px) {
    left: 77px;
    bottom: 35px;
  }

  @media only screen and (max-width: 450px) {
    left: 64px;
    bottom: 26px;
  }
`;

const StyledPosterMovieContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 390px) {
    justify-content: center;
  }
`;
const MediaBlock = () => {
  const [showCaption, setShowCaption] = useState(false);

  const toggleShowCaption = () => {
    setShowCaption(!showCaption);
  };

  return (
    <StyledImagesContainer>
      <StyledPosterMovieContainer>
        <StyledImageContainer>
          <img src={poster} alt="movie poster" />
        </StyledImageContainer>
        <StyledMovieContainer>
          <img src={osl} alt="outside lands" />
          <StyledPlayButtonContainer onClick={toggleShowCaption}>
            <img src={playIcon} alt="play button" />
          </StyledPlayButtonContainer>
          {showCaption && (
            <StyledPlayCaption>Not an actual video, sorry.</StyledPlayCaption>
          )}
          <StyledDetailButtonContainer>
            <img src={detailsIcons} alt="details button" />
          </StyledDetailButtonContainer>
        </StyledMovieContainer>
      </StyledPosterMovieContainer>

      <StyledPhotoCardContainer>
        <StyledTopPhotoCard>
          <PhotoCard icon={videoIcon} text="15 VIDEOS" />
        </StyledTopPhotoCard>
        <PhotoCard icon={photoIcon} text="99+ PHOTOS" />
      </StyledPhotoCardContainer>
    </StyledImagesContainer>
  );
};

export default MediaBlock;
