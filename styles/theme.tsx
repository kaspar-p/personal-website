import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#545775",
    },
    secondary: {
      main: "#718f94",
    },
    background: {
      default: "#fafafa",
    },
  },
});

const injectFontLight = {
  fontFamily: "Montserrat-Light",
};

const injectFontMedium = {
  fontFamily: "Montserrat-Medium",
};

theme = createTheme(theme, {
  typography: {
    fontFamily: ["Montserrat-Light", "Montserrat-Medium"].join(","),
    h1: injectFontMedium,
    h2: injectFontMedium,
    h3: injectFontMedium,
    h4: injectFontMedium,
    h5: injectFontMedium,
    h6: injectFontMedium,
    subtitle1: injectFontMedium,
    subtitle2: injectFontMedium,
    body1: injectFontMedium,
    body2: injectFontMedium,
    caption: injectFontMedium,
    allVariants: {
      color: "pink",
    },
  },
});

export default theme;
