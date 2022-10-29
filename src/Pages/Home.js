import Header from "../Components/Header";
import Image from "./images/FIRST PAGE.svg";
import { Grid, TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
// About section
import AboutSection from "../Components/AboutSection";

const useStyles = makeStyles({
  inputrField: {
    padding: "10px 14px",
    border: "1px solid #C4C4C4",
    borderRadius: "10px",
    width: "100%",
    fontSize: "16px",
    letterSpacing : "0.1em",
    fontWeight : 400,
    outline : "none"
  },
});

export default function Home(props) {
  const classes = useStyles();
  return (
    <Grid sx={{ minHeight: "100vh", overflow: "hidden" , paddingTop : "65px" }}>
      <Header />
      <Grid style={{ position: "relative" }}>
        <Grid
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={Image} style={{ width: "100%" }} />
        </Grid>
        <Grid style={{ position: "absolute", top: "8vh", left: "17vw" }}>
          <Grid style={{ fontWeight: "normal" , fontSize : "16px" }}>
            come ! join us in this journey of
          </Grid>
          <Grid style={{ fontWeight: "bold", fontSize: 80 , lineHeight : "1.2em" , marginTop : "20px" }}>
            Beginning of
            <br />
            Infinity.
          </Grid>
          <Grid sx={{ position: "relative", maxWidth: "406px" , marginTop : "29px" }}>
            {/* <TextField
              label="xyz@gmail.com"
              variant="outlined"
              fullWidth
              sx={{
                "& label": {
                  paddingLeft: (theme) => theme.spacing(2),
                  fontWeight: "bold",
                  color: "#000",
                },
                "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: "20px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      variant="contained"
                      style={{
                        border: 0,
                        borderRadius: 15,
                        backgroundColor: "#2785FC",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      Lets Get Started!
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
            <input
              placeholder="xyz@gmail.com"
              className={classes.inputrField}
            />
            <button
              style={{
                border: 0,
                borderRadius: 10,
                backgroundColor: "#2785FC",
                color: "#fff",
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: "16.8px",
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                fontWeight : "bold",
              }}
            >
              Lets Get Started!
            </button>
          </Grid>
          <Grid style={{ color: "#666666" , marginTop : "18px" , display : "flex" , alignItems : "center" }}>
            Know more
            {/* <IconButton> */}
              <KeyBoardArrowDownIcon />
            {/* </IconButton> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
