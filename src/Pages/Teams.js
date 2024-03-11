import React from "react";
import { Grid } from "@mui/material";
import SliderComponent from "../Components/SliderComponent";

export default function Teams() {
  return (
    <Grid id='teams'>
       <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ overflow: "hidden", background : `url(${"images/LeftImage.svg"})`, backgroundRepeat : "repeat-x", backgroundSize : "600px", marginTop: '86px', 
        // "@media (max-width: 600px)": {
        //   marginLeft: '-80px', 
        // },
      }}>
        <Grid
          style={{
            display: "flex",
            position: "relative",
            zIndex: 0,
            flexDirection: "row",
            justifyContent : "center",
            background : "rgb(244 240 240 / 45%)",
            marginLeft:"10px",
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
              fontSize:50,

            }}
          >
            Teams
          </Grid>
        </Grid>
      </Grid>
      <SliderComponent/>
    </Grid>
  );
}