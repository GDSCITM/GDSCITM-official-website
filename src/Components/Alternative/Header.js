import React from 'react'
import styles from "./Header.module.css"
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderTwo() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainHeaderLogo} >
          <img src='images/Logo.svg' alt='GDSC ITM LOGO' />
        </div>
        <div className={styles.mainHeaderMobileItem} >
          <p>
            <MenuIcon />
          </p>
        </div>
        <div className={styles.mainHeaderItem} >
          <p>Home</p>
          <p>About</p>
          <p>Event</p>
          <p>Team</p>
          <Button variant="contained" style={{ backgroundColor: "#2785FC" }}>
            Join Us
          </Button>
        </div>
     
      </div>
      <div style={{ position: "relative", width: "100%", height: "80px" }} ></div>
    </>
  )
}
