import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";


export default function HeaderTwo() {
  var theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("768"));

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainHeaderLogo}>
          {matches ? (
            <img
              src="images/Logo.svg"
              alt="GDSC ITM LOGO"
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollTo(0, 0)}
            />
          ) : (
            <img
              src="images/LogoWithoutText.svg"
              alt="GDSC ITM LOGO"
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollTo(0, 0)}
            />
          )}
        </div>
        <div className={styles.mainHeaderMobileItem}>
          <p>
            <MenuIcon />
          </p>
        </div>
        <div className={styles.mainHeaderItem}>
          <p>Home</p>
          <p>About</p>
          <p>Event</p>
          <p>Team</p>
          <a href=" https://gdsc.community.dev/institute-of-technology-and-management-gwalior/"><Button variant="contained" style={{ backgroundColor: "#2785FC" }}>
            <span>Join Us</span>
          </Button></a>
        </div>
      </div>
      <div
        style={{ position: "relative", width: "100%", height: "80px" }}
      ></div>
    </>
  );
}
