import styled from "styled-components";
import SectionHeader from "../SectionHeader/SectionHeader";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCastInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ICastInfoType {
  imageUrl: string;
  name: string;
  role: string;
}
const CastInfo: React.FC<ICastInfoType> = ({ imageUrl, name, role }) => {
  return (
    <StyledCastInfoContainer>
      <div>{imageUrl}</div>
      <div>
        {name} {role}
      </div>
    </StyledCastInfoContainer>
  );
};

const CastSection = () => {
  return (
    <div>
      <SectionHeader text="Top Cast" />
      <StyledRow>
        <CastInfo imageUrl="poop" name="Sam Mathison" role="Boyf" />
        <CastInfo imageUrl="poop" name="Christen Nguyen" role="Girlf" />
      </StyledRow>
    </div>
  );
};

export default CastSection;
