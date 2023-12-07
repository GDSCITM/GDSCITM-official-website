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
              <h4>•	Mission and Goals</h4>
              <p>The mission of GDSC is to bridge the gap between theory and application of technology, empowering students to become successful developers and contributors to the tech community. The primary goals include providing a platform for learning, collaboration, and the practical application of coding skills.</p>
              <h4>•	Benefits of Joining</h4>
              <p>Joining GDSC offers a range of benefits:</p>
              <p>- Access to workshops, training sessions, and hands-on projects.</p>
              <p>- Networking opportunities with like-minded students and industry professionals.</p>
              <p>- Exposure to cutting-edge technologies and tools.</p>
              <p>- The chance to work on real-world projects and contribute to open-source development.</p>
           
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
