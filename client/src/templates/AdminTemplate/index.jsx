import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { mainListItems, secondaryListItems } from "./listItems";
import Deposits from "./Deposits";
import Orders from "./Orders";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from "./Topbar";
import useStyles from "./styles";
import theme from "../../theme";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const controlUserButtons = [
    {
        id: 1,
        isActive: true,
        title: "Tất cả",
    },
    {
        id: 2,
        isActive: false,
        title: "Quản lý",
    },
    {
        id: 3,
        isActive: false,
        title: "Khách hàng",
    },
];

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const [search, setSearch] = React.useState("");
    const classes = useStyles();
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleClickControlUserBtn = (id) => {
        if (id === 1) {
            controlUserButtons[0].isActive = true;
            controlUserButtons[1].isActive = false;
            controlUserButtons[2].isActive = false;
        } else if (id === 2) {
            controlUserButtons[0].isActive = false;
            controlUserButtons[1].isActive = true;
            controlUserButtons[2].isActive = false;
        } else {
            controlUserButtons[0].isActive = false;
            controlUserButtons[1].isActive = false;
            controlUserButtons[2].isActive = true;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <Box sx={{ display: "flex" }} className={classes.root}>
                <CssBaseline />
                <Drawer variant="permanent" open={open} id="acb">
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                        id="abb"
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid
                            container
                            spacing={3}
                            className={classes.bodyControlBar}
                        >
                            <Grid
                                item
                                sx={12}
                                md={8}
                                className={classes.bodyControlBarItem}
                            >
                                {controlUserButtons.map((item) => (
                                    <Button
                                        key={item.id}
                                        className={
                                            item.isActive
                                                ? classes.bodyBtnActive
                                                : classes.bodyBtnDefault
                                        }
                                        onClick={() =>
                                            handleClickControlUserBtn(item.id)
                                        }
                                    >
                                        {item.title}
                                    </Button>
                                ))}
                            </Grid>
                            <Grid
                                item
                                xs={false}
                                md={4}
                                className={classes.bodyControlBarItem}
                            >
                                <Box component="div">
                                    <Paper
                                        component="form"
                                        sx={{
                                            p: "2px 4px",
                                            display: "flex",
                                            alignItems: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search..."
                                            inputProps={{
                                                "aria-label":
                                                    "search google maps",
                                            }}
                                            value={search}
                                        />
                                        <IconButton
                                            type="submit"
                                            sx={{ p: "10px" }}
                                            aria-label="search"
                                        >
                                            <SearchIcon
                                                className={
                                                    classes.bodyControlBarSearchIcon
                                                }
                                            />
                                        </IconButton>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box
                            component="div"
                            className={classes.footerPagination}
                        >
                            <button className={classes.footerPaginationItem}>
                                <ChevronLeftIcon />
                            </button>
                            <button
                                className={classes.footerPaginationItemActive}
                            >
                                1
                            </button>
                            <button className={classes.footerPaginationItem}>
                                2
                            </button>
                            <button className={classes.footerPaginationItem}>
                                3
                            </button>
                            <span>...</span>
                            <button className={classes.footerPaginationItem}>
                                22
                            </button>
                            <button className={classes.footerPaginationItem}>
                                <ChevronRightIcon />
                            </button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function AdminTemplate() {
    return <DashboardContent />;
}
