import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Typography from "@mui/material/Typography";
import LayersIcon from "@mui/icons-material/Layers";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Avatar from "@mui/material/Avatar";
import avatatpath from "../../assets/avatars/avatar-default.jpg";

export const mainListItems = (
    <React.Fragment>
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
                {/* <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    {/* <ListItemText>
                        
                    </ListItemText>
                    <ListItemText primary="Quản lý người dùng" />
                </ListItemButton> */}
            </Box>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Quản lý người dùng" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Quản lý phim" />
        </ListItemButton>
    </React.Fragment>
);
