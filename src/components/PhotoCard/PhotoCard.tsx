import styled from "styled-components";

const StyledContainer = styled.div`
  height: 163px;
  width: 150px;
  background-color: #363636;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  :hover {
    background-color: #484848;
  }
`;

interface IPhotoCard {
  icon: string;
  text: string;
}

const StyledIconContainer = styled.div`
  margin-bottom: 4px;
`;

const StyledText = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0;
`;
const PhotoCard: React.FC<IPhotoCard> = ({ icon, text }) => {
  return (
    <StyledContainer>
      <StyledIconContainer>
        <img src={icon} alt="icon" height="32px" />
      </StyledIconContainer>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};

export default PhotoCard;
