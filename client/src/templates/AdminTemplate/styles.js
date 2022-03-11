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
    controlSearchBox: {
        marginRight: 0,
    },
    topbar: {
        position: "fixed !important",
        top: 0,
        left: 0,
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
    },
    topbarLink: {
        width: "50px !important",
        height: "50px !important",
        textDecoration: "none",
    },
    sidebar: {
        position: "fixed !important",
        top: "64px",
        left: 0,
        width: "255px",
        height: "calc(100vh - 64px) !important",
        backgroundColor: theme.palette
            ? theme.palette.secondary.dark
            : "#1b1b1b",
    },
    sidebarItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
    },
    sidebarActive: {
        backgroundColor:
            (theme.palette ? theme.palette.primary.main : "#DF2525") +
            "!important",
    },
    body: {
        position: "relative !important",
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
    bodyControlBar: {
        width: "100% !important",
        height: "72px !important",
        display: "flex !important",
        alignItems: "center !important",
        margin: "80px 0 20px 0 !important",
        pading: "16px !important",
        borderRadius: "4px",
        backgroundColor: "white !important",
    },
    bodyControlBarItem: {
        padding: "0 !important",
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
        postition: "relative !important",
        display: "inline-flex !important",
        justifyContent: "space-between !important",
        alignItems: "center !important",
        width: "372px !important",
        marginTop: "20px !important",
        float: "right !important",
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
