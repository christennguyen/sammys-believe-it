import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #121212;
  color: white;
  text-align: center;
  height: 250px;
  position: absolute;
  width: 100%;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledCopyright = styled.div`
  margin-top: 12px;
  color: #bbbbbb;
  font-size: 12px;
`;
const Footer = () => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        A Bozos Company
        <StyledCopyright>© 2022 by Sammy's Believe It or Not</StyledCopyright>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Footer;
