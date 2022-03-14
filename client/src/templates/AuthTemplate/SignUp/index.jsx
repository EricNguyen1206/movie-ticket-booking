import * as React from "react";
import {
    Box,
    Checkbox,
    Container,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
    Radio,
    RadioGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
} from "@mui/material";
import {
    Reddit,
    Twitter,
    FacebookRounded,
    MailOutlineRounded,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import logo from "../../../assets/images/logo.png";
import useStyles from "./styles";
import Validator from "../Validator";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../app/slices/auth";
import { userSignup } from "../../../app/reducers/Auth/userSlice";
import { LoadingButton } from "@mui/lab";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="/">
                Lotte Cinemax
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
    const [checkFirstName, setCheckFirstName] = React.useState(true);
    const [checkLastName, setCheckLastName] = React.useState(true);
    const [checkEmail, setCheckEmail] = React.useState(true);
    const [checkPassword, setCheckPassword] = React.useState(true);
    const [checkConfirm, setCheckConfirm] = React.useState(true);
    const [password, setPassword] = React.useState("");
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const currentUser = {
            email: data.get("email"),
            password: data.get("password"),
            firstName: data.get("firstname"),
            lastName: data.get("lastname"),
            gender: data.get("gender"),
            birthday: birthday,
        };
        if (
            birthday &&
            checkFirstName &&
            checkLastName &&
            checkEmail &&
            checkPassword &&
            checkConfirm &&
            password
        ) {
            dispatch(register(currentUser));
            if (user.email) {
                navigate("/");
            }
        } else {
            alert("Thông tin tài khoản không hợp lệ, vui lòng thử lại!");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <Grid
                    item
                    id="sideBanner"
                    className={classes.paperContainer}
                    sm={4}
                    md={7}
                >
                    <Box
                        xs={false}
                        component="div"
                        className={classes.sideBanner}
                    >
                        <Box
                            xs={false}
                            component="div"
                            className={classes.brandGroup}
                        >
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
                        <Box
                            xs={false}
                            component="div"
                            className={classes.sideContact}
                        >
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
                                        component="h2"
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
                            <Grid container component="div" spacing={2}>
                                <Grid item component="div" xs={12} md={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="firstname"
                                        label="First Name"
                                        type="text"
                                        autoFocus
                                        error={!checkFirstName}
                                        helperText={
                                            !checkFirstName
                                                ? "Không được để trống"
                                                : " "
                                        }
                                        onBlur={(e) =>
                                            setCheckFirstName(
                                                Validator.isRequired(
                                                    e.currentTarget.value
                                                ).test
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid item component="div" xs={12} md={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="lastname"
                                        label="Last Name"
                                        type="text"
                                        error={!checkLastName}
                                        helperText={
                                            !checkLastName
                                                ? "Không được để trống"
                                                : " "
                                        }
                                        onBlur={(e) =>
                                            setCheckLastName(
                                                Validator.isRequired(
                                                    e.currentTarget.value
                                                ).test
                                            )
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                error={!checkEmail}
                                helperText={
                                    !checkEmail ? "Nhập vào email hợp lệ" : " "
                                }
                                onBlur={(e) =>
                                    setCheckEmail(
                                        Validator.isEmail(e.currentTarget.value)
                                            .test
                                    )
                                }
                            />
                            <Grid
                                container
                                component="div"
                                style={{ marginTop: "20px" }}
                                spacing={2}
                            >
                                <Grid item component="div" xs={7} sm={6}>
                                    <FormControl>
                                        <FormLabel id="gender">
                                            Gender
                                        </FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="gender"
                                            name="gender"
                                            defaultValue="female"
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
                                </Grid>
                                <Grid item component="div" xs={5} sm={6}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            label="Birthday"
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
                                </Grid>
                            </Grid>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
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
                                onChange={(e) =>
                                    setPassword(e.currentTarget.value)
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                error={!checkConfirm}
                                helperText={
                                    !checkConfirm
                                        ? "Mật khẩu không chính xác"
                                        : " "
                                }
                                onBlur={(e) =>
                                    setCheckConfirm(
                                        Validator.isConfirmed(
                                            e.currentTarget.value,
                                            password
                                        ).test
                                    )
                                }
                            />

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
                                <LoadingButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    className={classes.loginBtn}
                                    loading={isLoading}
                                >
                                    Submit
                                </LoadingButton>
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
