import { useState } from "react";
import styled from "styled-components";
import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import arrowIcon from "../../images/icons/arrowRightWhite.svg";
import photo1 from "../../images/photo1.jpg";
import photo2 from "../../images/photo2.jpg";
import photo3 from "../../images/photo3.jpg";
import photo4 from "../../images/photo4.jpg";
import photo5 from "../../images/photo5.jpg";
import photo6 from "../../images/photo6.jpg";

const StyledGalleryParent = styled.div`
  overflow: hidden;
`;
const StyledPhotoGallery = styled.div<{ activeIndex: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.3s;
  transform: translateX(-${(props) => props.activeIndex * 174}px);
`;

const StyledPhoto = styled.img`
  height: 160px;
  margin-right: 14px;
`;

const StyledNextButton = styled.div`
  background-color: rgb(112, 112, 112, 0.5);
  height: 48px;
  border: 1px solid white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 66px;
  position: absolute;
  right: -26px;
  top: 46px;
  cursor: pointer;

  @media only screen and (max-width: 860px) {
    right: -21px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  position: relative;
`;

const PHOTO_MAP = [photo6, photo5, photo4, photo3, photo2, photo1];

const PhotoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayNext = () => {
    if (activeIndex === PHOTO_MAP.length - 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <SectionCard>
      <SectionHeader text="Photos" />
      <StyledRow>
        <StyledGalleryParent>
          <StyledPhotoGallery activeIndex={activeIndex}>
            {PHOTO_MAP.map((image, index) => (
              <StyledPhoto
                key={`sam-christen-${index}`}
                src={image}
                alt={`sam and christen ${index}`}
              />
            ))}
          </StyledPhotoGallery>
        </StyledGalleryParent>
        <StyledNextButton onClick={displayNext}>
          <img src={arrowIcon} alt="arrow icon" height="56px" />
        </StyledNextButton>
      </StyledRow>
    </SectionCard>
  );
};

export default PhotoSection;
