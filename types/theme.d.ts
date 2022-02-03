import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    palette: {
      background: {
        default: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette?: {
      background?: {
        default?: string;
      };
    };
  }
  // eslint-disable-next-line no-unused-vars
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module "@mui/material" {
  export type VariantType =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
}
