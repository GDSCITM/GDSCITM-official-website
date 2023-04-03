import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Button, Grid, Link } from "@mui/material";
import { useStyles } from "./HeaderCss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header(props) {
	const classes = useStyles();
	var theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("900"));
	const heading = useMediaQuery(theme.breakpoints.up("sm"));
	const [menuBtnClick, setMenuBtnClick] = useState(false); //STATE TO TOGGLE MENU BTN IN MOBILE VIEW

	return (
		<AppBar
			position="fixed"
			style={{
				background: "#fff",
				width: "100vw",
				top: 0,
				boxShadow: "none",
				fontFamily: "Roboto",
			}}>
			{/* <CssBaseline /> */}
			<Toolbar>
				<img src={"images/GDSC LOGO 1.svg"} height={"65px"} />
				<Typography>
					<div
						className={classes.heading}
						style={{
							fontSize: heading ? 24 : 16,
							fontFamily: "Roboto",
						}}>
						<div>Google Developer Student Club</div>
						<div
							style={{
								color: "#959595",
								fontSize: "14.74px",
								fontFamily: "Roboto",
								paddingTop: "3px",
							}}>
							ITM Gwalior
						</div>
					</div>
				</Typography>

				<Grid
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					style={{
						display: matches ? "flex" : "none",
						flexGrow: 2,
						justifyContent: "flex-end",
					}}>
					<Grid className={classes.link}>Home</Grid>
					<Grid className={classes.link}>About</Grid>
					<Grid className={classes.link}>Event</Grid>
					<Grid className={classes.link}>Teams</Grid>

					<Grid className={classes.link}>
						<Button
							variant="contained"
							style={{ backgroundColor: "#2785FC" }}>
							<a
								href="https://gdsc.community.dev/institute-of-technology-and-management-gwalior/"
								target="_blank">
								Join Us
							</a>
						</Button>
					</Grid>
				</Grid>

				{/* POPUP FOR NAV LINKS IN MOBILE VIEW  */}
				<Grid
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					style={{
						display: matches ? "none" : "flex",
						flexGrow: 2,
						justifyContent: "flex-end",
						color: "#000",
					}}>
					<MenuIcon onClick={() => setMenuBtnClick(!menuBtnClick)} />
					<Grid
						className={classes.popUpMobile}
						direction="column"
						justifyContent="space-between"
						alignItems="center"
						style={{
							display: menuBtnClick ? "flex" : "none",
						}}>
						<Typography className={classes.linkMobile}>
							Home
						</Typography>
						<Typography className={classes.linkMobile}>
							About
						</Typography>
						<Typography className={classes.linkMobile}>
							Event
						</Typography>
						<Typography className={classes.linkMobile}>
							Teams
						</Typography>
						<Grid className={classes.linkMobile}>
							<Button
								variant="contained"
								style={{ backgroundColor: "#2785FC" }}>
								<a
									href="https://gdsc.community.dev/institute-of-technology-and-management-gwalior/"
									target="_blank">
									Join Us
								</a>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
