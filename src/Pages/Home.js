import HeaderTwo from "../Components/Alternative/Header";
import { Grid, TextField, InputAdornment, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

// About section
import AboutSection from "../Components/AboutSection";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRef } from "react";
import "../App.css";
import "./Home.css";
import HomeTwo from "../Components/Alternative/Home/Home";

const useStyles = makeStyles({
  inputrField: {
    border: "1px solid #C4C4C4",
    borderRadius: "10px",
    width: "100%",
    letterSpacing: "0.1em",
    fontWeight: 400,
    outline: "none",
  },
});

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();

  //for making responsive text
  const matches = useMediaQuery(theme.breakpoints.down("1100"));

  //for making responsive input field
  const input = useMediaQuery(theme.breakpoints.down("900"));

  let ref = useRef();

  return (
    <>
      <div style={{position:"relative",width:"100%"}}>
        <HeaderTwo/>
        <HomeTwo/>
      </div>
    </>
  );
}
