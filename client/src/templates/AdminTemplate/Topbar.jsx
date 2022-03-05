import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../components/Logo";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import useStyles from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";

export default function ButtonAppBar() {
    const classes = useStyles();
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
                            <Logo />
                        </Typography>
                        <Button color="inherit">
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
