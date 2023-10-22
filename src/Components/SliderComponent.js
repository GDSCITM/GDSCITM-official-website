import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton, Grid, Divider, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./slider.css";
export default function SliderComponent() {
  var rs = useRef();
  var reviews = [
    // {
    //   id: 1,
    //   name: "Akshat Jain",
    //   role: "Technical Support",
    //   avatar: "/images/1.png",
    //   bg: "/images/bg1.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 2,
    //   name: "Rohit Sharma",
    //   role: "UI/UX Designer",
    //   avatar: "/images/2.png",
    //   bg: "/images/bg2.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 3,
    //   name: "Harry Singh",
    //   role: "System engineer",
    //   avatar: "/images/3.png",
    //   bg: "/images/bg3.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 4,
    //   name: "Akshara Jain",
    //   role: "Web Development",
    //   avatar: "/images/4.png",
    //   bg: "/images/bg4.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 5,
    //   name: "Ronit Roy",
    //   role: "Web Development",
    //   avatar: "/images/1.png",
    //   bg: "/images/bg4.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 6,
    //   name: "Vayu Gandhi",
    //   role: "System engineer",
    //   avatar: "/images/2.png",
    //   bg: "/images/bg3.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 7,
    //   name: "Abhiraj",
    //   role: "UI/UX Designer",
    //   avatar: "/images/3.png",
    //   bg: "/images/bg2.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
    // {
    //   id: 8,
    //   name: "Ram Singh",
    //   role: "Technical Support",
    //   avatar: "/images/4.png",
    //   bg: "/images/bg1.png",
    //   "github": "https://github.com/",
    //   "linkedin": "https://www.linkedin.com/",
    //   "twitter": "https://twitter.com/"
    // },
  ];

  const [teamdata, setteamdata] = useState([])

  useEffect(() => {
    let i = 1;
    let rendomint = () => {
      if (i === 4) {
        i = 1
      } else {
        i = i + 1
      }
      return i
    }
    const fetchdata = async () => {
      const response = await fetch("https://raw.githubusercontent.com/yash9111/Datastore/master/images/coreTeam/data.json")
      const data = await response.json()
      console.log(data)
      setteamdata(data.map((item, idx) => ({ ...item, bg: `/images/bg${rendomint()}.png` })))
    }

    fetchdata()

  }, [])


  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#dddddd00",
          borderRadius: "10px",
          padding: "0px",
          position: "absolute",
          top: "-7%",
          left: "50%",
          transform: "translatex(-50%)",
          zIndex: -1,


        }}
      >
        <ul style={{ margin: "0px", padding: 0 }}> {dots} </ul>
      </div>
    ),
  };

  const handleNext = () => {
    rs.current.slickNext();
  };
  const handlePrev = () => {
    rs.current.slickPrev();
  };

  const showComponent = (data) =>
    data.map((item, index) => (
      <Grid
        item
        lg={3}
        md={3}
        sm={6}
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 0px 30px 0px",
          pointerEvents: "auto",
        }}

      >
        <Box
          sx={{
            minWidth: 203,
            width: "fit-content",
            minHeight: 267.39,
            borderRadius: 4,
            filter:
              "drop-shadow(-4.40684px 4.40684px 16.5257px rgba(0, 0, 0, 0.1)) drop-shadow(2.20342px -2.20342px 16.5257px rgba(0, 0, 0, 0.1))",
            background: "white",

          }}
          className="person_div"
        >
          <Box
            style={{
              height: 140,
              display: "flex",
              justifyContent: "center",
              background: `url(${item.bg}) no-repeat `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              alignItems: "center"
            }}
          >
            <img style={{ height: "6.75rem", width: "6.75rem", borderRadius: "50%", border: "4px solid white" }} src={item.avatar} />
          </Box>
          <Box style={{ height: 107.39, paddingBottom: "20px", }}>
            <Typography
              gutterBottom
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "15.68px",
                fontWeight: "bold",
                marginTop: "9px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
              component="div"
            >
              {item.name}
            </Typography>
            <Typography
              gutterBottom
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "12.54px",
                color: "#333333",
                marginTop: "9px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
              component="div"
            >
              {item.role}
            </Typography>

            <Typography
              variant="body2"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "9px",
                marginBottom: "10px",

              }}
              color="#959595"
            >
              {item.linkedin ? <a href={item.linkedin} target="_blank"><LinkedInIcon fontSize="large" style={{ cursor: "pointer ", color: "rgb(149, 149, 149)" }} /></a> : null}
              {item.twitter ? <a href={item.twitter} target="_blank"><TwitterIcon fontSize="large" style={{ cursor: "pointer ", color: "rgb(149, 149, 149)" }} /></a> : null}
              {item.github ? <a href={item.github} target="_blank"><GitHubIcon fontSize="large" style={{ cursor: "pointer ", color: "rgb(149, 149, 149)" }} /></a> : null}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ));

  return (
    <div>
      <Grid
        container
        spacing={1}
        style={{
          width: "100%",
          display: "flex",
          marginTop: 5,
          justifyContent: "center",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <Grid style={{ position: "absolute", top: 0, left: 100 }}>
          <IconButton
            onClick={handlePrev}
            variant="contained"
            style={{ cursor: "pointer" }}
          >
            <img src="/images/leftarrow.png" />
          </IconButton>
        </Grid>
        <Grid
          style={{
            marginTop: 20,
            color: "#525252",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            Leadership Team
          </Grid>
          <Divider color="#333333" marginTop={10} />
          <Grid
            style={{
              color: "#666666",
              fontSize: 14,
              display: "flex",
              justifyContent: "center",
              fontWeight: 400,
              marginTop: 10,
            }}
          >
            vision and courage to create
          </Grid>
        </Grid>
        <Grid style={{ position: "absolute", top: 0, right: 100 }}>
          <IconButton onClick={handleNext} variant="contained">
            <img src="/images/rightarrow.png" />
          </IconButton>
        </Grid>
      </Grid>
      <div style={{ marginTop: "60px", position: "relative" }}>
        <Slider {...settings} ref={rs} >
          <Grid container sx={{ display: "flex !important", }}>
            {showComponent(teamdata)}
          </Grid>
          <Grid container sx={{ display: "flex !important", }}>
            {showComponent(reviews)}
          </Grid>
        </Slider>
      </div>
    </div>
  );
}
