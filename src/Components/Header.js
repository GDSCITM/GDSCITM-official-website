import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Logo from "./GDSC LOGO 1.svg";
import { Button, Grid } from "@mui/material";
import { useStyles } from "./HeaderCss";
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  const classes = useStyles();
  var theme=useTheme()
  const matches=useMediaQuery(theme.breakpoints.up('900'))
  const heading=useMediaQuery(theme.breakpoints.up('361'))
  return (
    <AppBar
      position="fixed"
      style={{ background: "#fff", width: "100vw", top: 0, boxShadow: "none" }}
    >
      <CssBaseline />
      <Toolbar>
        <img src={Logo} height={"65px"} />
        <Typography>
          <div className={classes.heading} style={{fontSize:heading?24:16}}>
            <div>Google Developer Student Club</div>
            <div style={{ color: "#959595", fontSize: "14.74px" }}>
              ITM Gwalior
            </div>
          </div>
        </Typography>

        <Grid
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{ display:matches?"flex":"none" , flexGrow: 2, justifyContent: "flex-end" }}
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
          style={{ display:matches?"none":"flex" , flexGrow: 2, justifyContent: "flex-end",color:'#000' }}
        >
         <MenuIcon/>
        </Grid>
        
      </Toolbar>
    </AppBar>
  );
}
