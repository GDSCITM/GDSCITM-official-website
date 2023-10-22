import { Button, Typography, Grid } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { makeStyles } from "@mui/styles";
import "../App.css";

const useStyles = makeStyles(() => ({
  letter: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: "Google Sans",
  },
  aboutImage: {
    width: "100%",
    display: "block",
    margin: { sm: "auto" },
    // height: { lg: "100%" },
  },
}));

const AboutSection = () => {
  const classes = useStyles();
  return (
    <Grid sx={{ overflow: "hidden" }} id={"about"}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        className={"aboutGrid"}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "40px", sm: "48px" },
              fontWeight: "bold",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              paddingTop: { xs: "2.5rem", sm: "2.67rem" },
            }}
          >
            <span
              style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
              className={classes.letter}
            >
              A
            </span>
            bout The Community
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              marginTop: "0.5em",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            }}
          >
            What we do and How we are so good at it... !
          </Typography>
          <div style={{ paddingTop: "55px", paddingBottom: "10px" }}>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontWeight: "600",
                fontSize: {
                  xs: "25px",
                  sm: "35px",
                },
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              What is GDSC?
            </Typography>
            <Typography
              sx={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
              variant="h6"
              color="GrayText"
            >
              Google collaborates with university students who are passionate
              about growing developer communities. GDSC is focused upon building
              technical and non-technical skills, which would help students to
              build a better community.
            </Typography>
            <Typography
              variant="h6"
              color="GrayText"
              sx={{
                marginY: "1em",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              # Lets Learn, Grow and Innovate together.
            </Typography>
            <Button
              size="large"
              variant="contained"
              startIcon={<OpenInNewIcon />}
              sx={{
                marginTop: "50px",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              Know Moree
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} style={{ paddingTop: "150px" }}>
          <img
            className={classes.aboutImage}
            src={"images/Peoples.svg"}
            alt="People holding hands"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
