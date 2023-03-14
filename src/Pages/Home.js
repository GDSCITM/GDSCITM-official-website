import Header from "../Components/Header";
import { Grid, TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
// About section
import AboutSection from "../Components/AboutSection";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRef } from "react";
import '../App.css';

const useStyles = makeStyles({
  inputrField: {
    border: "1px solid #C4C4C4",
    borderRadius: "10px",
    width: "100%",
    letterSpacing: "0.1em",
    fontWeight: 400,
    outline: "none",
  }
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
      <Grid sx={{ overflow: "hidden", marginTop: '65px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={12} md={6} style={{
              backgroundImage: "url('/images/background.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '600px',
              zIndex: 2
            }}>
              <div className="mainContentText">
                <Grid style={{ fontWeight: "normal", fontSize: "16px" }}>
                  come ! join us in this journey of
                </Grid>
                <Grid
                  style={{
                    fontWeight: "bold",
                    fontSize: matches ? 60 : 80,
                    lineHeight: "1.2em",
                    marginTop: "20px",
                  }}
                >
                  Beginning of Infinity.
                </Grid>
                <Grid
                  sx={{
                    position: "relative",
                    maxWidth: input ? "150px" : "250px",
                    marginTop: "18px"
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
                    }}
                    ref={ref}  
                  />
                  <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        textAlign: 'right',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: input ? 265 : 455,
                        height: '100%'
                      }}>
                    <button
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
                        alignItems: 'center'
                      }}
                      onClick={() => ref.current.value = ""} 
                    >
                      {input ? 'Lets Go!' : 'Lets Get Started!'}
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
                      }}
                      onClick={() => ref.current.value = ""} 
                    >
                      Lets Go!
                    </button>
                  </div>
                </Grid>
                <Grid
                  style={{
                    color: "#666668",
                    marginTop: "18px",
                    display: "flex",
                    fontSize: '14px',
                    alignItems: "center"
                  }}
                >
                  Know more
                  {/* <IconButton> */}
                  <KeyBoardArrowDownIcon />
                  {/* </IconButton> */}
                </Grid>
              </div>
          </Grid>
          <Grid
            item xs={12}
            sm={12} md={6}
            className="secondContentImage"
            style={{
              backgroundImage: "url('/images/FIRST PAGE.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '600px',
              zIndex: 1
            }}
          >
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
