import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import MainPage from "./Components/SliderComponent";
import Event from "./Pages/Event/Event";
import Footer from "./Pages/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import About from "./Components/Alternative/about/about";
import Gallery from "./Components/Alternative/gallery/gallery";
import Contributers from "./Components/Alternative/contributors/contributors";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <About/>
      <Gallery/>
      <Event />
      <Teams />
      <Contributers/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
