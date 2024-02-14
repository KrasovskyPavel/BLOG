import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: [
    "none",
    "0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 1px 5px 0px rgba(0,0,0,0.18)",
  ],
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
