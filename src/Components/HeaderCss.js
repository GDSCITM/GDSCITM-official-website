import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";

const useStyles = makeStyles(() => ({
	heading: {
		flexGrow: "1",
		cursor: "pointer",
		color: "#666666",
		fontWeight: 500,
		display: "flex",
		alignContent: "center",
		flexDirection: "column",
		fontSize: 24,
	},
	link: {
		textDecoration: "none",
		color: "#959595",
		fontSize: "20px",
		cursor: "pointer",
		marginLeft: 40,
		"&:hover": { color: "#000" },
	},
	linkMobile: {
		textDecoration: "none",
		color: "#999999",
		fontSize: "16px",
		cursor: "pointer",
		// marginLeft: 40,
		"&:hover": { color: "#000" },
	},
	popUpMobile: {
		position: "absolute",
		border: "1px solid #999999",
		borderRadius: "10px",
		height: "auto",
		width: "8rem",
		backgroundColor: "#ffffff",
		top: "3rem",
		right: "3rem",
		gap: "1rem",
		padding: "1rem",
	},
}));

export { useStyles };
