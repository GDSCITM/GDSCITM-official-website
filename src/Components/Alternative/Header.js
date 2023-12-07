import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useState } from "react";



export default function HeaderTwo() {
  var theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("768"));
  const [menu, setMenu] = useState(false)
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
          <p onClick={() => { setMenu(!menu) }}>
            <MenuIcon />
          </p>
        </div>
        <div className={styles.mainHeaderItem}>

          <a href="/#"><p>Home</p></a>
          <a href="/#about"><p>About</p></a>
          <a href="/#event"><p>Event</p></a>
          <a href="/#teams"><p>Team</p></a>

          <a href=" https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=857409878587-im3f0si9p11h41a6aeiil7cs37frkubb.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fgdsc.community.dev%2Faccounts%2Fgoogle%2Flogin%2Fcallback%2F&scope=profile%20email&response_type=code&state=mIqbVEW7LSWV&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow"><Button variant="contained" style={{ backgroundColor: "#2785FC" }}>
            <span>Join Us</span>
          </Button></a>
        </div>
      </div>
      <div
        style={{ position: "relative", width: "100%", height: "82px" }}
      ></div>

      <div className={styles.mainHeaderMobile} style={{ display: `${menu === true ? "block" : "none"}` }}>

        <div className={styles.mainHeaderMobileClose} onClick={() => { setMenu(!menu) }}></div>
        <div className={styles.mainHeaderMobileHolder} >

          <div className={styles.mainHeaderMobileHolderItemTwo} >
            <p><HomeOutlinedIcon /> Home</p>
            <p><InfoOutlinedIcon /> About</p>
            <p><CalendarMonthOutlinedIcon /> Event</p>
            <p><GroupsOutlinedIcon /> Team</p>
            <p><FeedbackOutlinedIcon /> Feedback</p>
            <p><QuizOutlinedIcon /> FAQ's</p>
            <p><b>{"<>"}</b>Join club</p>

          </div>
        </div>
      </div>
    </>
  );
}
