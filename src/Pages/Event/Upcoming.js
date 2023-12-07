import React from "react";
import "./Event.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState, useEffect } from "react";
import MobileUpcoming from "./MobileUpcoming";
function Upcoming({ anime }) {
  // const[data1,setData]=useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    //ismobile or not
    <div>
      {isMobile ? (
        <MobileUpcoming data={anime} />
      ) : (
        <div className="card1Mob">
          <div className="card-ele">
            <div>
              <div
                className="upcoming-img"
                style={{ backgroundImage: `url(${anime.topImage})` }}
              >
                {/* <img src={anime.topImage} alt="" >
          </img> */}
                <div className="date">
                  <h3>
                    {anime.date}
                    <p>{anime.month}</p>
                  </h3>
                </div>

                <div className="border"></div>
                <div className="topic">
                  Orientation <br></br>Session
                </div>
              </div>
            </div>
            <div className="info-box">
              <div className="text-data">
                <p>{anime.text}</p>
              </div>
              <div
                className="know-ele"
                style={{ backgroundColor: anime.color }}
              >
                <OpenInNewIcon />
                <p>Know More</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upcoming;
