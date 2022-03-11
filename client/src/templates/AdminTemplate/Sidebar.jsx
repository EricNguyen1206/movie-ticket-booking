import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import avatatpath from "../../assets/avatars/avatar-default.jpg";
import useStyles from "./styles";

export default function Sidebar({
    manageUsers,
    setManageUsers,
    manageMovies,
    setManageMovies,
}) {
    const classes = useStyles();

    const handleUserManageClick = () => {
        setManageUsers(true);
        setManageMovies(false);
    };

    const handleMovieManageClick = () => {
        setManageMovies(true);
        setManageUsers(false);
    };
    return (
        <Box component="div" className={classes.sidebar}>
            <Box component="div" className={classes.sidebar}>
                <List component="nav">
                    <ListItemButton>
                        <Box
                            component="div"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src={avatatpath}
                                sx={{
                                    width: 40,
                                    height: 40,
                                }}
                            />

                            <Typography variant="h8" component="span">
                                Nguyen van A
                            </Typography>
                            <Typography variant="h10" component="span">
                                nguyenvana@gmail.com
                            </Typography>
                        </Box>
                    </ListItemButton>
                    <Divider sx={{ my: 1 }} />
                    <ListItemButton
                        onClick={handleUserManageClick}
                        className={manageUsers ? classes.sidebarActive : " "}
                    >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý người dùng" />
                    </ListItemButton>
                    <ListItemButton
                        onClick={handleMovieManageClick}
                        className={manageMovies ? classes.sidebarActive : " "}
                    >
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý phim" />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );
}
