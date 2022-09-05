import styled from "styled-components";
import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import PhotoSection from "./components/PhotosSection/PhotoSection";
import CastSection from "./components/CastSection/CastSection";
import StorylineSection from "./components/StorylineSection/StorylineSection";

const StyledMainSection = styled.div`
  padding: 20px 40px;
`;

const StyledInfoCard = styled.div`
  border: 1px solid #f5c518;
  border-radius: 4px;
  margin: 10px 0 10px 0;
  padding: 4px;
`;

function App() {
  return (
    <div className="App">
      <div>
        <HeaderBar />
        <Overview />
        <StyledMainSection>
          <StyledInfoCard>
            <b>Won 2 Oscars</b> 12 wins & 7 nominations total
          </StyledInfoCard>
          <PhotoSection />
          <CastSection />
          <StorylineSection />
        </StyledMainSection>

        <Footer />
      </div>
    </div>
  );
}

export default App;
