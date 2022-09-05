import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #202020;
  color: white;
  width: 100%;
  height: 500px;
  padding: 20px 40px 20px 40px;
`;

const StyledTitleContainer = styled.div``;
const StyledRatingsContainer = styled.div``;
const StyledInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledHeader = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: normal;
`;

const StyledInfoContainer = styled.div``;
const Overview = () => {
  return (
    <StyledContainer>
      <StyledInfoBar>
        <StyledTitleContainer>
          <StyledHeader>One Year</StyledHeader>
          <div>2022 - PG - 8760h 0m</div>
        </StyledTitleContainer>
        <StyledRatingsContainer>
          10/10 - 3.2M Rate Metacritic{" "}
        </StyledRatingsContainer>
      </StyledInfoBar>
      <div>Image here</div>
      <div>Action - Comedy - Drama - Romance</div>
      <StyledInfoContainer>
        <div>
          Two unlikely lovers meet by chance and learn what it means to
          understand one another and themselves and ultimately find love{" "}
        </div>
        <div>Stars Sam Mathison - Christen Nguyen</div>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default Overview;
