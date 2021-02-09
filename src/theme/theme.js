import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#FF0049",
    secondaryColor: "#002B45",
    terciaryColor: "#FFF1E5",
    white: "#FFFFFF",
    black: "#000000",
    blue: "#40C3DF",
    grey: "#788F9C",
  },
  fonts: ["Quicksand", "sans-serif"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
