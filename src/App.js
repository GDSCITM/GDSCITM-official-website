import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import MainPage from "./Components/SliderComponent";
import Event from "./Pages/Event/Event";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <AboutSection />
      <Event />
      <Teams />
    </ThemeProvider>
  );
}

export default App;
