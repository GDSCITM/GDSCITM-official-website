import React from "react";
import "./Event.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState, useEffect } from "react";
const MobileUpcoming = ({ data }) => {
  const anime = data;
  return (
    <div className="mobileCard">
      <div className="cardLeft">
        <div
          className="cardLeft__info"
          style={{ backgroundColor: anime.color }}
        >
          <div className="cardLeft-bar"></div>
          <div className="cardLeft-date">
            <h3>
              {anime.date}
              <p>{anime.month}</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="cardRight">
        <div className="cardRight-name">Orientation Session</div>
        <p className="cardRight-info">{anime.text}</p>
        <div className="know-ele" style={{ backgroundColor: anime.color }}>
          <OpenInNewIcon />
          <p>Know More</p>
        </div>
      </div>
    </div>
  );
};

export default MobileUpcoming;
