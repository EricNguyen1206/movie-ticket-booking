import { makeStyles } from "@mui/styles";
import bg from "../../assets/images/bg.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiDrawer-paper": {
            backgroundColor: "#333",
        },
        "& .MuiSvgIcon-root": {
            color: "white",
        },

        "& .MuiTypography-root": {
            color: "white",
        },
    },
    topbar: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    bodyControlBar: {
        display: "flex !important",
        alignItems: "center !important",
        backgroundColor: "white !important",
        margin: "80px 0 20px 0 !important",
    },
    bodyBtnActive: {
        marginLeft: "20px !important",
        backgroundColor: "red !important",
        color: "white !important",
        fontWeight: "bold !important",
    },
    bodyBtnDefault: {
        marginLeft: "20px !important",
        backgroundColor: "#ccc !important",
        color: "white !important",
        fontWeight: "bold !important",
    },
    bodyControlBarItem: {
        padding: "0 0 0 0 !important",
    },
    bodyControlBarSearchIcon: {
        color: "black !important",
    },
    bodyTable: {
        backgroundColor: "white !important",
        margin: "20px 0 !important",
    },
    bodyTableBtn: {
        padding: "10px 0 !important",
        backgroundColor: "transparent !important",
        borderRadius: "50%",
    },
    footerPagination: {
        position: "absolute !important",
        right: "36px !important",
        bottom: "0 !important",
        display: "inline-flex !important",
        justifyContent: "space-between !important",
        alignItems: "center !important",
        width: "372px !important",
    },
    footerPaginationItem: {
        width: "30px !important",
        height: "30px !important",
        border: "none !important",
        borderRadius: "50%",
        backgroundColor: "#F5F5F5",
    },
    footerPaginationItemActive: {
        width: "30px !important",
        height: "30px !important",
        border: "none !important",
        borderRadius: "50%",
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
    },
}));

export default useStyles;
