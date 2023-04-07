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
  const [menu,setMenu] = useState(false)
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
          <p onClick={() => {setMenu(!menu)}}>
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
      
      <div className={styles.mainHeaderMobile} style={{display:`${menu === true ? "block" : "none"}`}}>
        <div className={styles.mainHeaderMobileClose} onClick={() => {setMenu(!menu)}}></div>
        <div className={styles.mainHeaderMobileHolder} >
          <div className={styles.mainHeaderMobileHolderItem} >
            <div className={styles.mainHeaderMobileHolderItemImage} >
              <img src="images/gallery/2.jpeg" alt="anshit" />
            </div>
            <div className={styles.mainHeaderMobileHolderItemDetails} >
              <p>anshit mishra</p>
              <span>anshitmishra03@gmail.com</span>
            </div>
          </div>
          <div className={styles.mainHeaderMobileHolderItemTwo} >
            <p><HomeOutlinedIcon/> Home</p>
            <p><InfoOutlinedIcon/> About</p>
            <p><CalendarMonthOutlinedIcon/> Event</p>
            <p><GroupsOutlinedIcon/> Team</p>
            <p><FeedbackOutlinedIcon/> Feedback</p>
            <p><QuizOutlinedIcon/> FAQ's</p>
            <p><b>{"<>"}</b>Join club</p>
            <p><LogoutOutlinedIcon/> Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}
