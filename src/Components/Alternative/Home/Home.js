import React from 'react'
import styles from "./Home.module.css"
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colors } from '@mui/material';

export default function HomeTwo() {
    return (
        <div className={styles.main}>
            <div className={styles.mainHolder}>
                <div className={styles.mainHolderOne}>
                    <div className={styles.mainHolderOneItem}>
                        <p>come! join us in the journey of</p>
                        <h1>Beginning of <br />infinity.</h1>
                        <div className={styles.mainHolderOneItemInput}>
                            <input type='text' placeholder='example@gmail.com' />
                            <button >Let's get Started!</button>
                        </div>
                        <a href='/#about' ><p>know more <KeyBoardArrowDownIcon /></p></a>
                    </div>
                </div>
                <div className={styles.mainHolderTwo}>
                    <div className={styles.mainHolderTwoImage}>
                        <img src='images/header/googleHomeboy.webp' alt='google boy' />
                    </div>
                </div>
            </div>
            <div className={styles.mainBg}>
                <img src='images/header/background.png' alt='google boy' />

            </div>
        </div>
    )
}
