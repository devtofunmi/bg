import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/choose.png";
const Homepage = () => {
  return (
    <>
      <Box h={"100vh"} mx={"50px"}>
        <Navbar />
        <Flex justifyContent={"space-between"} mt={"20px"}>
          <Img w={"500px"} src={bg} />
          <Box w={"600px"}>
            <Text fontSize={"40px"} fontWeight={"bold"} fontStyle={"Roboto"}>
              Remove Background From Image and Add Another Background for Free
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Homepage;
