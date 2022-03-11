import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import theme from "../../theme";
import useStyles from "./styles";
import { userSignout } from "../../app/reducers/Auth/userSlice";
import { useDispatch } from "react-redux";

export default function ButtonAppBar() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSignout = () => {
        dispatch(userSignout());
    };
    return (
        <ThemeProvider theme={theme}>
            <Box id="abc" sx={{ flexGrow: 1 }} className={classes.topbar}>
                <AppBar position="static" className={classes.topbar}>
                    <Toolbar className={classes.topbar}>
                        <Typography
                            component="div"
                            sx={{ flexGrow: 1 }}
                            style={{ marginTop: "8px" }}
                        >
                            <Link
                                key="LIÊN HỆ"
                                to="/"
                                className={classes.topbarLink}
                            >
                                <Logo />
                            </Link>
                        </Typography>
                        <Button color="inherit" onClick={() => handleSignout()}>
                            <LogoutIcon />
                            <Typography
                                variant="h8"
                                component="span"
                                style={{ marginLeft: "8px" }}
                            >
                                Đăng xuất
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
