import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 22px;
  background-color: black;
  color: white;
  width: 100%;
  padding: 17px;
`;

const HeaderBar = () => {
  return (
    <StyledContainer>
      <div>Logo</div>
      <div>Searchbar</div>
      <div>Sign in</div>
    </StyledContainer>
  );
};

export default HeaderBar;
