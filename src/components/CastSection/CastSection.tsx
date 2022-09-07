import styled from "styled-components";
import { SectionCard } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import christenHeadShot from "../../images/christen.jpg";
import samHeadShot from "../../images/sam.jpg";

const StyledCastInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHeadshot = styled.img`
  border-radius: 50%;
  margin-right: 12px;
  height: 96px;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
`;

const StyledCastText = styled.div`
  display: flex;
  flex-direction: column;
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
      <StyledRow>
        <CastInfo imageUrl={samHeadShot} name="Sam Mathison" role="Boyf" />
        <CastInfo
          imageUrl={christenHeadShot}
          name="Christen Nguyen"
          role="Girlf"
        />
      </StyledRow>
    </SectionCard>
  );
};

export default CastSection;
