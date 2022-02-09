import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import bg from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.png";

const styles = {
    paperContainer: {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        width: "100%",
    },
    logo: {
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        width: "100%",
    },
};

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

const Register = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={3} style={{ minHeight: "100vh" }}>
                    <Box
                        sx={{ display: "flex" }}
                        style={{ height: "100%", backgroundColor: "#fff" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <Box
                                id="menu-appbar"
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "84px",
                                    alighItem: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        height: "60px",
                                        width: "60px",
                                    }}
                                >
                                    <Paper style={styles.logo}></Paper>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9} style={{ minHeight: "100vh" }}>
                    <Box
                        sx={{ display: "flex" }}
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        <Paper style={styles.paperContainer}>
                            Some text to fill the Paper Component
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;
