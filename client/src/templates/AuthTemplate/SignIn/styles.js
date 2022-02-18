import bg from "../../../assets/images/bg.jpg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red",
        color: (props) => props.color,
    },
    sideBanner: {
        height: "calc(100% - 40px) !important",
    },
    sideContact: {
        position: "relative",
        bottom: "0",
        width: "100%",
        height: "40px",
        borderTop: "2px solid #FFF",
    },
    paperContainer: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        ["@media (max-width:780px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "none !important",
        },
        ["@media (min-width:780px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "block !important",
        },
    },
    logo: {
        width: "60px",
        height: "60px",
    },
    brandGroup: {
        position: "relative",
        top: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    brandName: {
        backgroundColor: "transparent",
        color: "#DF2525",
        fontFamily: "Arial, Helvetica, sans-serif !important",
        fontWeight: "bold !important",
        // marginLeft: "8px !important",
    },
    brand: {
        maxWidth: "520px !important",
        margin: "0",
        ["@media (max-width:900px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "none !important",
        },
    },
    brandIntro: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ["@media (max-width:900px)"]: {
            // eslint-disable-line no-useless-computed-key
            display: "none !important",
        },
    },
    loginBtn: {
        backgroundColor: "#DF2525 !important",
        width: "172px !important",
        height: "40px !important",
        borderRadius: "40px !important",
    },
    copyright: {
        position: "relative",
        bottom: "0px !important",
        left: "50px !important",
    },
    contactGroup: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "280px",
        margin: "24px auto",
    },
    contactIcons: {
        display: "flex !important",
        justifyContent: "center !important",
        alignItems: "center !important",
        width: "40px !important",
        height: "40px !important",
        borderRadius: "50% !important",
    },
    link: {
        textDecoration: "none !important",
    },
    gridContent: {
        display: "flex",
        justifyContent: "center",
    },
}));

export default useStyles;
