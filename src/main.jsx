import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em",
  md: "431px",
  lg: "913px",
};
const theme = extendTheme({ breakpoints });

import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
