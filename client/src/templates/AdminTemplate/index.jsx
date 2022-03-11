import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { InputBase } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import Orders from "./Orders";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import useStyles from "./styles";
import theme from "../../theme";

const controlUserButtons = ["Tất cả", "Quản lý", "Khách hàng"];

function DashboardContent() {
    const classes = useStyles();
    const [search, setSearch] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(10);
    const [manageUsers, setManageUsers] = React.useState(true);
    const [manageMovies, setManageMovies] = React.useState(false);
    const [filterAccount, setFilterAccount] = React.useState(0);

    const { accounts } = useSelector((state) => state.accounts);

    React.useEffect(() => {
        setTotalPage(Math.ceil(accounts.length / 8));
    }, [accounts]);

    const handleChangePagination = (event, value) => {
        event.preventDefault();
        setPage(value);
    };

    const handleClickControlUserBtn = (id) => {
        setFilterAccount(id);
    };

    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <Box sx={{ display: "flex" }} className={classes.root}>
                <CssBaseline />
                <Sidebar
                    manageUsers={manageUsers}
                    setManageUsers={setManageUsers}
                    manageMovies={manageMovies}
                    setManageMovies={setManageMovies}
                />
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
                        marginLeft: "240px",
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{ mt: 4, mb: 4 }}
                        className={classes.body}
                    >
                        <Grid
                            container
                            spacing={3}
                            className={classes.bodyControlBar}
                        >
                            <Grid
                                item
                                xs={12}
                                md={8}
                                className={classes.bodyControlBarItem}
                            >
                                {controlUserButtons.map((item, index) => (
                                    <Button
                                        key={index}
                                        className={
                                            filterAccount === index
                                                ? classes.bodyBtnActive
                                                : classes.bodyBtnDefault
                                        }
                                        onClick={() =>
                                            handleClickControlUserBtn(index)
                                        }
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </Grid>
                            <Grid
                                id="acc"
                                item
                                xs={false}
                                md={4}
                                className={classes.bodyControlBarItem}
                            >
                                <Box
                                    component="div"
                                    className={classes.controlSearchBox}
                                >
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
                                                color="primary"
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
                                    <Orders page={page} />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box
                            component="div"
                            className={classes.footerPagination}
                        >
                            <Pagination
                                count={totalPage}
                                page={page}
                                color="primary"
                                onChange={handleChangePagination}
                            />
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
