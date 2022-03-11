import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Logo from "../Logo";
import { useSelector, useDispatch } from "react-redux";
import { userSignout } from "../../app/reducers/Auth/userSlice";

const Topbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);
    const { account } = useSelector((state) => state.user);
    const { status } = useSelector((state) => state.user);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleSignout = () => {
        dispatch(userSignout());
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar id="appbar" className={classes.root}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mt: 1, display: { xs: "none", md: "flex" } }}
                        >
                            <Link to="/" className={classes.link}>
                                <Logo className={classes.logo} />
                            </Link>
                        </Typography>

                        <Box
                            id="navbar"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                                justifyContent: "flex-start",
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="#movies" className={classes.link}>
                                        <Button className={classes.navLink}>
                                            PHIM
                                        </Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link
                                        to="#cineplex"
                                        className={classes.link}
                                    >
                                        <Button className={classes.navLink}>
                                            CỤM RẠP
                                        </Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link
                                        to="#contact"
                                        className={classes.link}
                                    >
                                        <Button className={classes.navLink}>
                                            LIÊN HỆ
                                        </Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                justifyContent: "center",
                            }}
                        >
                            <Link to="movies" className={classes.link}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                    }}
                                    className={classes.navLink}
                                >
                                    PHIM
                                </Button>
                            </Link>
                            <Link to="cineplex" className={classes.link}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                    }}
                                    className={classes.navLink}
                                >
                                    CỤM RẠP
                                </Button>
                            </Link>
                            <Link to="#contact" className={classes.link}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                    }}
                                    className={classes.navLink}
                                >
                                    LIÊN HỆ
                                </Button>
                            </Link>
                            {/* {account.role === "R1" ? (
                                
                            ) : (
                                ""
                            )} */}
                            <Link to="/admin" className={classes.link}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                    }}
                                    className={classes.navLink}
                                >
                                    QUẢN LÝ
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: "flex" }}>
                            {status && status === "SUCCESS" ? (
                                <Button
                                    className={classes.btnLink}
                                    onClick={() => handleSignout()}
                                >
                                    Đăng xuất
                                </Button>
                            ) : (
                                <>
                                    <Link to="/signin" className={classes.link}>
                                        <Button className={classes.btnLink}>
                                            Đăng nhập
                                        </Button>
                                    </Link>
                                    <Divider orientation="vertical" flexItem />
                                    <Link to="/signup" className={classes.link}>
                                        <Button className={classes.btnLink}>
                                            Đăng ký
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default Topbar;
