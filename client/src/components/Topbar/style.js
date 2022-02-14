import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: "white !important",
            opacity: "0.9 !important",
            position: "fixed !important",
            top: "0 !important",
        },
        logo: {
            width: "50px !important",
            "&:hover": {
                boxShadow: "-10px 10px #000",
            },
        },
        link: {
            textDecoration: "none",
        },
        btnLink: {
            color: "#ccc !important",
            backgroundColor: "transparent !important",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": {
                color: "#EF5350 !important",
            },
        },
        navLink: {
            margin: "0  10px",
            fontSize: "14px",
            fontFamily: "sans-serif",
            fontWeight: "600",
            color: "#333 !important",
            backgroundColor: "transparent !important",
            borderBottom: "2px solid transparent",
            "&:hover": {
                color: "#EF5350 !important",
                borderBottom: "2px solid #EF5350",
                borderRadius: "0",
            },
        },
    })
);

export default useStyles;
