import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import MainPage from "./Components/SliderComponent";
import Event from "./Pages/Event/Event";

function App() {
  return (
    <>
      <Home />
      <AboutSection />
      <Event/>
      <Teams/>
    </>
  );
}

export default App;
