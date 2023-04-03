import React from 'react'
import "./Header.css"
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderTwo() {
  return (
    <div className={"main"}>
      <div className={"mainHeaderLogo"} >
        <img src='images/Logo.svg' alt='GDSC ITM LOGO' />
      </div>
      <div className={"mainHeaderItem"} >
        <p>Home</p>
        <p>About</p>
        <p>Event</p>
        <p>Team</p>
        <Button variant="contained" style={{ backgroundColor: "#2785FC" }}>
          Join Us
        </Button>
      </div>
      <div className={"mainHeaderMobileItem"} >
        <p>
          <MenuIcon />
        </p>
      </div>
    </div>
  )
}
