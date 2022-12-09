import React from "react";
import { Box } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Box w={"100%"} minH={"100vh"} bg={"#f5f8f9"} color={"#181819"}>
        <Homepage />
      </Box>
    </>
  );
}

export default App;
