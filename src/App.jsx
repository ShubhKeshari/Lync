import { useState } from "react";

import "./App.css";
import { Box } from "@chakra-ui/react";
import Grid from "./assets/Grid.png";
function App() {
  return (
    <>
      <Box
        bgImage={Grid}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundColor="#020617"

        width={"100%"}
        height={"100vh"}
      ></Box>
    </>
  );
}

export default App;
