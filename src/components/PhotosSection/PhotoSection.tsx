import styled from "styled-components";
import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";

// Initially set just 4 photos, nice to have: full carousel
const StyledPhotoGallery = styled.div``;

const PhotoSection = () => {
  return (
    <SectionCard>
      <SectionHeader text="Photos" />
      <StyledPhotoGallery>Images here</StyledPhotoGallery>
    </SectionCard>
  );
};

export default PhotoSection;
