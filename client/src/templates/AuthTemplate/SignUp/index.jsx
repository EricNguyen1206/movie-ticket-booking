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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    FacebookRounded,
    Twitter,
    MailOutlineRounded,
    Reddit,
} from "@mui/icons-material";
import logo from "../../../assets/images/logo.png";
import useStyles from "./styles";

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

export default function SigUp() {
    const [birthday, setBirthday] = React.useState("2001-1-1");
    const [remember, setRemember] = React.useState(false);
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
            confirm_password: data.get("confirmPassword"),
            gender: data.get("gender"),
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            birthday: birthday,
            rememberMe: remember,
        });
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
                        <Box component="div" className={classes.brand}>
                            <Typography
                                component="h1"
                                variant="h4"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#FFF",
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontWeight: "bold",
                                }}
                            >
                                Chào mừng tới
                            </Typography>
                            <Typography
                                component="h1"
                                variant="h4"
                                className={classes.brandName}
                            >
                                Loto Cinemax
                            </Typography>
                        </Box>
                        <Box
                            id="test"
                            component="div"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                component="p"
                                variant="span"
                                style={{
                                    width: "50%",
                                    backgroundColor: "transparent",
                                    color: "#FFF",
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "18px",
                                    fontWeight: "300",
                                }}
                            >
                                Nhiều chương trình khuyến mãi chỉ dành riêng cho
                                khách hàng Loto Cinemat
                            </Typography>
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
                            <Link color="inherit" href="/">
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
                            <Box component="div"></Box>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="firstname"
                                label="First Name"
                                type="text"
                                id="first"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="lastname"
                                label="Last Name"
                                type="text"
                                id="lastname"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <FormControl>
                                <FormLabel id="gender">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="gender"
                                    name="gender"
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-password"
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Basic example"
                                    name="birthday"
                                    value={birthday}
                                    onChange={(newValue) => {
                                        setBirthday(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>

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
                                    <Link href="/register" variant="body2">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={remember}
                                        color="primary"
                                        onChange={() => setRemember(!remember)}
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
