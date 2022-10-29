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
}));

export { useStyles };
