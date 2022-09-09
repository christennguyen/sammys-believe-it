import styled from "styled-components";
import menu from "../../images/icons/menu.svg";
import imdbLogo from "../../images/icons/imdb-logo.svg";
import searchIcon from "../../images/icons/search.svg";
import searchIconWhite from "../../images/icons/searchWhite.svg";
import downIcon from "../../images/icons/downArrow.svg";

const StyledHeader = styled.div`
  width: 850px;
  padding: 12px;
`;

const StyledHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 860px) {
    justify-content: flex-start;
  }
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #121212;
  color: white;
`;

const StyledSearchField = styled.input`
  width: 90%;
  padding: 6px;
  border-style: hidden;
  -webkit-appearance: none;
`;

const StyledDivider = styled.div`
  border-right: 2px solid grey;
  border-radius: 4px;
  height: 34px;

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledSearchDropdown = styled.div`
  background-color: white;
  color: black;
  padding: 4px 2px 4px 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-right: 0.5px solid grey;
  cursor: pointer;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 31.25px;
  margin-right: 20px;

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const StyledsearchIcon = styled.div`
  background-color: white;
  color: black;
  padding: 6px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledSignInText = styled.div`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const StyledLogoSearchContainer = styled.div`
  display: flex;
  width: 84%;

  @media only screen and (max-width: 860px) {
    width: calc(100vw - 144px);
    margin-left: 8px;
  }
`;

const StyledLogo = styled.div`
  margin-right: 8px;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  cursor: pointer;
`;

const StyledMobileSearchIcon = styled.div`
  display: none;
  @media only screen and (max-width: 860px) {
    display: block;
    margin-right: 16px;
    cursor: pointer;
    margin-top: 4px;
  }
`;

const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderBar = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderContents>
          <StyledMenu>
            <img src={menu} alt="menu" height="22px" />
          </StyledMenu>
          <StyledLogoSearchContainer>
            <StyledLogo>
              <img src={imdbLogo} alt="imdb logo" height="31.25px" />
            </StyledLogo>
            <StyledSearchContainer>
              <StyledSearchDropdown>
                All
                <img src={downIcon} alt="down arrow" height="24px" />
              </StyledSearchDropdown>
              <StyledSearchField
                type="text"
                placeholder="Search IMDb"
                name="search"
              />
              <StyledsearchIcon>
                <img src={searchIcon} alt="search logo" height="21px" />
              </StyledsearchIcon>
            </StyledSearchContainer>
            <StyledDivider />
          </StyledLogoSearchContainer>
          <StyledSignInContainer>
            <StyledMobileSearchIcon>
              <img src={searchIconWhite} alt="search logo" height="24px" />
            </StyledMobileSearchIcon>
            <StyledSignInText>Sign in</StyledSignInText>
          </StyledSignInContainer>
        </StyledHeaderContents>
      </StyledHeader>
    </StyledContainer>
  );
};

export default HeaderBar;
