import styled from "styled-components";
import menu from "../../images/icons/menu.svg";
import imdbLogo from "../../images/icons/imdb-logo.svg";

const StyledHeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 22px;
  background-color: black;
  color: white;
  width: 100%;
`;

const StyledContainer = styled.div`
  padding: 16px;
  background-color: black;
`;
const HeaderBar = () => {
  return (
    <StyledContainer>
      <StyledHeaderContents>
        <div>
          <img src={menu} alt="menu" />
          <img src={imdbLogo} alt="imdb logo" height="24px" />
        </div>

        <div>Searchbar</div>
        <div>Sign in</div>
      </StyledHeaderContents>
    </StyledContainer>
  );
};

export default HeaderBar;
