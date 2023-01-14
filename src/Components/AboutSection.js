import {
  Box,
  Button,
  capitalize,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  letter: {
    fontSize: 48,
    fontWeight: "bold",
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
    <Container maxWidth="lg" sx={{minHeight : "100vh" , display : "flex" , alignItems : "center"}}>
      <Box mx={3} my={10}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "40px", sm: "48px" },
            fontWeight: "bold",
          }}
        >
          <span className={classes.letter}>A</span>bout The Community
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{ fontSize: { xs: "16px", sm: "20px" }, marginTop: "0.5em" }}
        >
          What we do and How we are so good at it... !
        </Typography>

        <Stack
          justifyContent="space-between"
          paddingX={{ xs: 0, sm: 3, md: 0 }}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "30px",
          }}
          // spacing={5}
          my="64px"
        >
          <Box flex={1}>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontWeight: "600",
                fontSize: {
                  xs: "25px",
                  sm: "35px",
                },
              }}
            >
              What is GDSC?
            </Typography>
            <br />
            <Typography
              variant="h6"
              color="GrayText"
              // sx={{ marginTop: "1em" }}
            >
              Google collaborates with university students who are passionate
              about growing developer communities. GDSC is focused upon building
              technical and non-technical skills, which would help students to
              build a better community.
            </Typography>

            <Typography variant="h6" color="GrayText" sx={{ marginY: "1em" }}>
              # Lets Learn, Grow and Innovate together.
            </Typography>
            <Button
              size="large"
              variant="contained"
              startIcon={<OpenInNewIcon />}
              sx={{ marginTop: "50px" }}
            >
              Know More
            </Button>
          </Box>
          <Box>
            <img
              className={classes.aboutImage}
              src={"images/Peoples.svg"}
              alt="People holding hands"
            />
          </Box>
        </Stack>
      </Box>

    </Container>
    
  );
};



export default AboutSection;

