import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Logo from "./GDSC LOGO 1.svg";
import Logo2 from "./GDSC LOGO 2.svg";
import { Button, Grid } from "@mui/material";
import { useStyles } from "./HeaderCss";
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu';
import "./style/header.css";
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
export default function Header(props) {
  const classes = useStyles();
  var theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('900'))
  const heading = useMediaQuery(theme.breakpoints.up('361'))

  const [menu, setMenu] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        style={{ background: "#fff", width: "100vw", top: 0, boxShadow: "none" }}
      >
        <CssBaseline />
        <Toolbar>
          <img src={Logo2} height={"65px"} alt={"logo gdsc itm"} />
          {/* <Typography>
            <div className={classes.heading} style={{ fontSize: heading ? 24 : 16 }}>
              <p className={"mainHeaderHeading"}>Google Developer Student Club</p>
              <p className={"mainHeaderSubHeading"}>
                ITM Gwalior
              </p>
            </div>
          </Typography> */}

          <Grid
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            style={{ display: matches ? "flex" : "none", flexGrow: 2, justifyContent: "flex-end" }}
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
            style={{ display: matches ? "none" : "flex", flexGrow: 2, justifyContent: "flex-end", color: '#000' }}
          >
            <span onClick={() => setMenu(true)}><MenuIcon /></span>
          </Grid>

        </Toolbar>
      </AppBar>


      <div className="mainMenuSideBar" style={{ display: `${menu ? "block" : "none"}` }}>
        <div className="mainMenuSideBarHolder">
          <div className="mainMenuSideBarHolderHeader">
            <img src={Logo2} alt={"logo gdsc itm"} />
            <p className="mainMenuSideBarClose" onClick={() => setMenu(false)}><CloseIcon /></p>
          </div>
          <div className="mainMenuSideBarHolderList">
            <p>Home</p>
            <p>About</p>
            <p>Event</p>
            <p>Teams</p>
          </div>
          <div className="mainMenuSideBarHolderContact">
            <p>connect with us</p>
            <p>
              <spna><FacebookIcon /></spna>
              <span><InstagramIcon /></span>
              <span><TwitterIcon /></span>
              <span><EmailIcon /></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
