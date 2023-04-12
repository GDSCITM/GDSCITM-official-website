import { useState } from "react";
import styles from "./Contributors.module.css"
import { useEffect } from "react";
export default function Contributers() {
    const [data, setData] = useState([]);
    const FetchData = async () => {
        let fetchList = await fetch("https://api.github.com/repos/GDSCITM/GDSCITM-official-website/contributors?anon=1")
        let data = await fetchList.json()
        console.log(data, "asdasdas");
        setData(data)
    }
    useEffect(() => {
        FetchData()
    }, [])
    return (
        <div className={styles.main}>
            <div className={styles.mainHeading}>
                <p></p>
                <h2>Contributors</h2>
                <p></p>
            </div>
            <div className={styles.mainHolder} >
                    {data.length > 0 && data.map((val, index) => {
                        return (<>
                            {val?.avatar_url ? <a href={val?.html_url} target="_blank" rel="noreferrer"><div title={val?.login} key={index} className={styles.mainHolderItem}>
                                <img src={val?.avatar_url} alt={val?.login} />
                                <p>{val?.login}</p>
                            </div></a> : ""}
                        </>

                        )
                    })}
                 

            </div>
        </div>
    )
}
