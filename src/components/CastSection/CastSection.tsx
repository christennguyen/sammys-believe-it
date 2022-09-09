import styled from "styled-components";
import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import christenHeadShot from "../../images/christen.jpg";
import samHeadShot from "../../images/sam.jpg";

const StyledCastInfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 860px) {
    justify-content: flex-start;
  }
`;

const StyledHeadshot = styled.img`
  border-radius: 50%;
  margin-right: 12px;
  height: 96px;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }

  @media only screen and (max-width: 860px) {
    height: 159px;
  }
`;

const StyledCastText = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 860px) {
    justify-content: center;
    align-items: center;
    margin-top: 8px;
  }
`;

const StyledActorName = styled.div`
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: grey;
  }
`;

const StyledRole = styled.div`
  color: #808080;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
interface ICastInfoType {
  imageUrl: string;
  name: string;
  role: string;
}
const CastInfo: React.FC<ICastInfoType> = ({ imageUrl, name, role }) => {
  return (
    <StyledCastInfoContainer>
      <StyledHeadshot src={imageUrl} alt={name} />
      <StyledCastText>
        <StyledActorName>{name}</StyledActorName>
        <StyledRole>{role}</StyledRole>
      </StyledCastText>
    </StyledCastInfoContainer>
  );
};

const CastSection = () => {
  return (
    <SectionCard>
      <SectionHeader text="Top Cast" />
      <StyledBlock>
        <CastInfo imageUrl={samHeadShot} name="Sam Mathison" role="Boyf" />
        <CastInfo
          imageUrl={christenHeadShot}
          name="Christen Nguyen"
          role="Girlf"
        />
      </StyledBlock>
    </SectionCard>
  );
};

export default CastSection;
