import styled from "styled-components";
import SectionHeader from "../SectionHeader/SectionHeader";

// Initially set just 4 photos, nice to have: full carousel
const StyledPhotoGallery = styled.div``;

const PhotoSection = () => {
  return (
    <div>
      <SectionHeader text="Photos" />
      <StyledPhotoGallery>Images here</StyledPhotoGallery>
    </div>
  );
};

export default PhotoSection;
