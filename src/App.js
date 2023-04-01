import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import MainPage from "./Components/SliderComponent";
import Event from "./Pages/Event/Event";
import Footer from "./Pages/Footer/Footer"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <AboutSection />
      <Event />
      <Teams />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
