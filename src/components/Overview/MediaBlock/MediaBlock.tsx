import styled from "styled-components";
import poster from "../../../images/poster.jpg";
import osl from "../../../images/osl.jpg";
import videoIcon from "../../../images/icons/videos.svg";
import photoIcon from "../../../images/icons/photos.svg";
import PhotoCard from "../../PhotoCard/PhotoCard";

const StyledImagesContainer = styled.div`
  display: flex;
  margin: 18px 0;
`;

const StyledImageContainer = styled.div`
  margin-right: 4px;
`;

const StyledPhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTopPhotoCard = styled.div`
  margin-bottom: 4px;
`;

const MediaBlock = () => {
  return (
    <StyledImagesContainer>
      <StyledImageContainer>
        <img src={poster} alt="movie poster" height="329px" />
      </StyledImageContainer>
      <StyledImageContainer>
        <img src={osl} alt="outside lands" height="329px" />
      </StyledImageContainer>
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
