import bg from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red",
        color: (props) => props.color,
    },
    sideBanner: {
        marginTop: "300px",
    },
    sideContact: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "40px",
        margin: "0 38px",
        borderTop: "2px solid #FFF",
    },
    paperContainer: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    logo: {
        width: "60px",
        height: "60px",
    },
    brandName: {
        backgroundColor: "transparent",
        color: "#DF2525",
        fontFamily: "Arial, Helvetica, sans-serif !important",
        fontWeight: "bold !important",
        marginLeft: "8px !important",
    },
    brand: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        // marginTop: '84px',
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
}));

export default useStyles;
