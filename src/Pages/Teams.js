import React from "react";
import { Grid } from "@mui/material";
import LeftImage from "./images/LeftImage.svg";
import RightImage from "./images/RightImage.svg";
import SliderComponent from "../Components/SliderComponent";

export default function Teams() {
  return (
    <Grid>
    <Grid sx={{ overflow: "hidden" , background : `url(${LeftImage})` , backgroundRepeat : "repeat-x" , backgroundSize : "600px"}}>
      <Grid
        style={{
          display: "flex",
          position: "relative",
          zIndex: 0,
          flexDirection: "row",
          justifyContent : "center",
          background : "rgb(244 240 240 / 45%)"
        }}
      >
        {/* <img src={LeftImage} style={{ width:1440,height:92 }} /> */}

        <Grid
          style={{
            width: 342,
            height: 92,
            backgroundColor: "#FFCE50",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight:'bold',
            color:'#fff',
            fontSize:50
          }}
        >
          Teams
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
   <SliderComponent/>
    </Grid>
  );
}
