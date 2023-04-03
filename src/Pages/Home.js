import Header from "../Components/Header";
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
      <Header />
      <Grid className="mainGrid" sx={{ overflow: "hidden", marginTop: "65px" }} id="home">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          className="backgroundImage"
          sx={{
            backgroundImage: {
              xs: "url('/images/header/background_ext.svg')",
              sm: "url('/images/header/background.svg')",
              md: "url('/images/header/background.svg')",
            },
          }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="mainContentText">
              <Grid className="welcomeMessage">
                <Typography
                  className="welcomeTitle"
                  style={{ fontWeight: "normal", fontSize: "16px" }}
                >
                  come ! join us in this journey of
                </Typography>
              </Grid>
              <Grid
                className="welcomeMessage "
                style={{
                  fontWeight: "bold",
                  fontSize: matches ? 45 : 80,
                  lineHeight: "1.2em",
                  textAlign: "center",
                }}
              >
                <Typography
                  className="welcomeTitle"
                  style={{
                    fontWeight: "bold",
                    fontSize: matches ? 45 : 80,
                    lineHeight: "1.2em",
                  }}
                >
                  Beginning of Infinity.
                </Typography>
              </Grid>

              <Grid
                sx={{
                  position: "relative",
                  maxWidth: input ? "150px" : "250px",
                  marginTop: "18px",
                }}
              >
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
                  style={{
                    fontSize: input ? "12px" : "16px",
                    padding: input
                      ? "10px 100px 10px 14px"
                      : "10px 190px 10px 14px",
                    marginLeft: 20,
                  }}
                  ref={ref}
                />
                <div
                  className="buttonAlignment"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    textAlign: "right",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: input ? 265 : 455,
                    height: "100%",
                    marginLeft: 20,
                  }}
                >
                  <button
                    className="letsGoBtn"
                    style={{
                      display: "flex",
                      border: 0,
                      borderRadius: 10,
                      backgroundColor: "#2785FC",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "10px 20px",
                      fontSize: input ? "9px" : "16.8px",
                      fontWeight: "bold",
                      alignItems: "center",
                    }}
                    onClick={() => (ref.current.value = "")}
                  >
                    {input ? "Lets Go!" : "Lets Get Started!"}
                  </button>
                  <button
                    style={{
                      display: input ? "none" : "none",
                      border: 0,
                      borderRadius: 10,
                      backgroundColor: "#2785FC",
                      color: "#fff",
                      cursor: "pointer",
                      padding: "10px 20px",
                      fontSize: input ? "12px" : "16.8px",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      height: "100%",
                      fontWeight: "bold",
                      marginLeft: 20,
                    }}
                    onClick={() => (ref.current.value = "")}
                  >
                    Lets Go!
                  </button>
                </div>

                <Grid
                  className="knowMore"
                  style={{
                    color: "#666668",
                    display: "flex",
                    fontSize: "14px",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    float: "right",
                  }}
                >
                  Know more
                  {/* <IconButton> */}
                  <KeyBoardArrowDownIcon />
                  {/* </IconButton> */}
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              className={"secondContentImage img-fluid"}
              src={"images/header/googleHomeboy.png"}
              alt="People holding hands"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
