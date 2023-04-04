import React from 'react'
import styles from "./Home.module.css"
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HomeTwo() {
    return (
        <div className={styles.main}>
            <div className={styles.mainHolder}>
                <div className={styles.mainHolderOne}>
                    <div className={styles.mainHolderOneItem}>
                        <p>come! join us in the jurney of</p>
                        <h1>Beginning of <br />infinity.</h1>
                        <div className={styles.mainHolderOneItemInput}>
                            <input type='text' placeholder='anshitmishra03@gmail.com' />
                            <button >Let's get Started!</button>
                        </div>
                        <p>know more <KeyBoardArrowDownIcon /></p>
                    </div>
                </div>
                <div className={styles.mainHolderTwo}>
                    <div className={styles.mainHolderTwoImage}>
                        <img src='images/header/googleHomeboy.png' alt='google boy' />
                    </div>
                </div>
            </div>
            <div className={styles.mainBg}>
                <img src='images/header/background.png' alt='google boy' />

            </div>
        </div>
    )
}
