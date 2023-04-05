import React from 'react'
import styles from "./about.module.css"
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function About() {
    return (
        <div className={styles.main} id='about'>
            <div className={styles.mainHolder}>
                <div className={styles.mainHolderOne}>
                    <h1>About The Community</h1>
                    <p> What we do and How we are so good at it... !</p>
                    <h2>What is GDSC?</h2>
                    <p>Google collaborates with university students who are passionate
                        about growing developer communities. GDSC is focused upon building
                        technical and non-technical skills, which would help students to
                        build a better community.</p>
                    <p># Lets Learn, Grow and Innovate together.</p>
                    <Button
                        size="medium"
                        variant="contained"
                        startIcon={<OpenInNewIcon />}
                        sx={{
                            width:"150px",
                            marginTop: "50px",
                            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        }}
                    >
                        Know More
                    </Button>
                </div>
                <div className={styles.mainHolderTwo}>
                    <img src='images/Peoples.svg' alt='people' />
                </div>
            </div>
        </div>
    )
}
