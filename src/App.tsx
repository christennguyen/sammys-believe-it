import styled from "styled-components";
import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import PhotoSection from "./components/PhotosSection/PhotoSection";
import CastSection from "./components/CastSection/CastSection";
import StorylineSection from "./components/StorylineSection/StorylineSection";
import AwardsCard from "./components/AwardsCard/AwardsCard";

const StyledContent = styled.div`
  width: 845px;
`;

const StyledSubContent = styled.div`
  width: 60%;
  margin-top: 20px;
`;
const StyledMainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.div`
  position: relative;
`;

function App() {
  return (
    <div className="App">
      <StyledMain>
        <HeaderBar />
        <Overview />
        <StyledMainSection>
          <StyledContent>
            <StyledSubContent>
              <AwardsCard />
              <PhotoSection />
              <CastSection />
              <StorylineSection />
            </StyledSubContent>
          </StyledContent>
        </StyledMainSection>

        <Footer />
      </StyledMain>
    </div>
  );
}

export default App;
