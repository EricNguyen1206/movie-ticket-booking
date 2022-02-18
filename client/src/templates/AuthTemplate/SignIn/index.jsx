import * as React from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    FacebookRounded,
    Twitter,
    MailOutlineRounded,
    Reddit,
} from "@mui/icons-material";
import logo from "../../../assets/images/logo.png";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../app/actions/Auth";
import { useNavigate } from "react-router-dom";
import Validator from "../Validator";

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

const theme = createTheme();

export default function SigIn() {
    const [checkEmail, setCheckEmail] = React.useState(true);
    const [checkPassword, setCheckPassword] = React.useState(true);

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AccountList = useSelector((state) => state.AccountList);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = {
            email: data.get("email"),
            password: data.get("password"),
        };
        const account = AccountList.find((acc) => acc.email === user.email);
        if (checkPassword && checkEmail) {
            if (account && account.password === user.password) {
                dispatch(signin(account));
                navigate("/");
            } else {
                alert("Lỗi, tài khoản không hợp lệ!");
            }
        } else {
            alert("Lỗi, vui lòng nhập thông tin chính xác!");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    className={classes.paperContainer}
                    xs={false}
                    sm={4}
                    md={7}
                >
                    <Box component="div" className={classes.sideBanner}>
                        <Box component="div" className={classes.brandGroup}>
                            <Grid
                                container
                                component="div"
                                spacing={1}
                                className={classes.brand}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    lg={6}
                                    className={classes.gridContent}
                                >
                                    <Typography
                                        component="span"
                                        variant="h4"
                                        style={{
                                            backgroundColor: "transparent",
                                            color: "#FFF",
                                            fontFamily:
                                                "Arial, Helvetica, sans-serif",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Chào mừng tới
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    lg={6}
                                    className={classes.gridContent}
                                >
                                    <Typography
                                        component="span"
                                        variant="h4"
                                        className={classes.brandName}
                                    >
                                        Loto Cinemax
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box
                                id="test"
                                component="div"
                                className={classes.brandIntro}
                            >
                                <Typography
                                    component="p"
                                    variant="span"
                                    style={{
                                        width: "50%",
                                        backgroundColor: "transparent",
                                        color: "#FFF",
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        fontSize: "18px",
                                        fontWeight: "300",
                                    }}
                                >
                                    Nhiều chương trình khuyến mãi chỉ dành riêng
                                    cho khách hàng Loto Cinemat
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box xs={false} sm={4} md={7} id="box">
                        <Box component="div" className={classes.sideContact}>
                            <Typography
                                component="p"
                                variant="span"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#FFF",
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "18px",
                                    fontWeight: "300",
                                    float: "left",
                                }}
                            >
                                Sdt: 0123456789
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 10.5,
                            mx: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            maxHeight: "100vh",
                        }}
                    >
                        <Container>
                            <Link
                                color="inherit"
                                href="/"
                                className={classes.link}
                            >
                                <Box component="div" className={classes.brand}>
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className={classes.logo}
                                    />
                                    <Typography
                                        component="h1"
                                        variant="h4"
                                        className={classes.brandName}
                                    >
                                        Loto Cinemax
                                    </Typography>
                                </Box>
                            </Link>{" "}
                        </Container>
                        <Typography component="h1" variant="h5">
                            Đăng nhập tài khoản
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={!checkEmail}
                                helperText={
                                    !checkEmail ? "Email không hợp lệ" : " "
                                }
                                onBlur={(e) =>
                                    setCheckEmail(
                                        Validator.isEmail(e.currentTarget.value)
                                            .test
                                    )
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={!checkPassword}
                                helperText={
                                    !checkPassword ? "Nhập đủ 8 ký tự" : " "
                                }
                                onBlur={(e) =>
                                    setCheckPassword(
                                        Validator.minLength(
                                            e.currentTarget.value,
                                            8
                                        ).test
                                    )
                                }
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        href="#"
                                        variant="body2"
                                        style={{ float: "left" }}
                                    >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Box
                                component="div"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    className={classes.loginBtn}
                                >
                                    Xác nhận
                                </Button>
                            </Box>
                            <Box
                                component="div"
                                className={classes.contactGroup}
                            >
                                <FacebookRounded
                                    className={classes.contactIcons}
                                    style={{ color: "blue" }}
                                />
                                <Twitter
                                    className={classes.contactIcons}
                                    style={{ color: "#00acee" }}
                                />
                                <MailOutlineRounded
                                    className={classes.contactIcons}
                                    style={{ color: "red" }}
                                />
                                <Reddit
                                    className={classes.contactIcons}
                                    style={{ color: "#FF5700" }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
