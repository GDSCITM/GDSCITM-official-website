import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useStyles } from "./HeaderCss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";


export default function Header(props) {
  const classes = useStyles();
<<<<<<< HEAD
  var theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("900"));
  const heading = useMediaQuery(theme.breakpoints.up("361"));
=======
  var theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('900'));
  const heading = useMediaQuery(theme.breakpoints.up('sm'));
>>>>>>> df1adb7d2c37c2ccbf14b7723d4b9c278178ab91

  return (
    <AppBar
      position="fixed"
      style={{
        background: "#fff",
        width: "100vw",
        top: 0,
        boxShadow: "none",
        fontFamily: "Roboto",
      }}
    >
      {/* <CssBaseline /> */}
      <Toolbar>
        <img src={"images/GDSC LOGO 1.svg"} height={"65px"} />
        <Typography>
<<<<<<< HEAD
          <div
            className={classes.heading}
            style={{ fontSize: heading ? 24 : 16, fontFamily: "Roboto" }}
          >
            <div>Google Developer Student Club</div>
            <div
              style={{
                color: "#959595",
                fontSize: "14.74px",
                fontFamily: "Roboto",
              }}
            >
=======
          <div className={classes.heading} style={{fontSize:heading?24:17}}>
            <div>Google Developer Student Club</div>
            <div style={{ color: "#959595", fontSize: heading?"14.74px":"13px" }}>
>>>>>>> df1adb7d2c37c2ccbf14b7723d4b9c278178ab91
              ITM Gwalior
            </div>
          </div>
        </Typography>
        
    
     

        <Grid
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{
            display: matches ? "flex" : "none",
            flexGrow: 2,
            justifyContent: "flex-end",
          }}
        >
          <Grid className={classes.link}>Home</Grid>
          <Grid className={classes.link}>About</Grid>
          <Grid className={classes.link}>Event</Grid>
          <Grid className={classes.link}>Teams</Grid>

          <Grid className={classes.link}>
            <Button variant="contained" style={{ backgroundColor: "#2785FC" }}>
              Join Us
            </Button>
          </Grid>
        </Grid>

        <Grid
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{
            display: matches ? "none" : "flex",
            flexGrow: 2,
            justifyContent: "flex-end",
            color: "#000",
          }}
        >
          <MenuIcon />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
