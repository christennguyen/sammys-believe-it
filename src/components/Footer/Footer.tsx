import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: black;
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

const Footer = () => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        A Bozos Company
        <div>© 2022 by Sammy's Believe It or Not</div>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Footer;
