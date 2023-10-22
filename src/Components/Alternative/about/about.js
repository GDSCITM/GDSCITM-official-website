import React, { useState } from "react";
import styles from "./about.module.css";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function About() {
  const [showHiddenContent, setShowHiddenContent] = useState(false);

  const toggleHiddenContent = () => {
    setShowHiddenContent(!showHiddenContent);
  };

  return (
    <div className={styles.main} id='about'>
      <div className={styles.mainHolder}>
        <div className={styles.mainHolderOne}>
          <h1>About The Community</h1>
          <p>What we do and how we are so good at it... !</p>
          <h2>What is GDSC?</h2>
          <p>
            Google collaborates with university students who are passionate
            about growing developer communities. GDSC is focused upon building
            technical and non-technical skills, which would help students to
            build a better community.
          </p>
          <p># Lets Learn, Grow and Innovate together.</p>
          
          {showHiddenContent && (
            <div>
              {/* Your hidden content goes here */}
              <p>Google collaborates with university students who are passionate
            about growing developer communities. GDSC is focused upon building
            technical and non-technical skills, which would help students to
            build a better community.This is hidden content that should appear when you click "Know More."</p>
            </div>
          )}

          <Button
            size="medium"
            variant="contained"
            startIcon={<OpenInNewIcon />}
            sx={{
              width: "150px",
              marginTop: "20px",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            }}
            onClick={toggleHiddenContent}
          >
            {showHiddenContent ? "Hide Details" : "Know More"}
          </Button>
        </div>

        <div className={styles.mainHolderTwo}>
          <img src='images/Peoples.svg' alt='people' />
        </div>
      </div>
    </div>
  );
}
