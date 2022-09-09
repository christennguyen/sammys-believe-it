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

  @media only screen and (max-width: 860px) {
    flex-direction: row;
    height: 48px;
    width: calc(50vw - 26px);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  @media only screen and (max-width: 390px) {
    width: calc(50vw - 2px);
  }
`;

interface IPhotoCard {
  icon: string;
  text: string;
}

const StyledIconContainer = styled.div`
  margin-bottom: 4px;

  img {
    height: 32px;
  }

  @media only screen and (max-width: 860px) {
    margin: 0 8px 0 0;

    img {
      height: 12px;
    }
  }
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
        <img src={icon} alt="icon" />
      </StyledIconContainer>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};

export default PhotoCard;
