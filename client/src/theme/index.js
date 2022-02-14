import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        common: {
            white: "#FFFFFF",
            black: "#000000",
            text: "#333333",
            yellow: "#FFD600",
            green: "#00CC00",
        },
        primary: {
            main: "#DF2525",
            light: "#EF5350",
            dark: "#C62828",
        },
        secondary: {
            main: "#424242",
            light: "#6d6d6d",
            dark: "#1b1b1b",
        },
    },
});

export default theme;
