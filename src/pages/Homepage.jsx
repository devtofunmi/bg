import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/choose.png";
const Homepage = () => {
  return (
    <>
      <Box h={"100vh"} mx={"70px"}>
        <Navbar />
        <Flex justifyContent={"space-between"} mt={"10px"}>
          <Box>
            <Box w={"500px"}>
              <Text fontSize={"50px"} fontWeight={"bold"} fontStyle={"Roboto"}>
                Make Image Look Better
              </Text>
              <Text fontSize={"25px"} color={"grey"}>
                100% Automatically and Free
              </Text>
            </Box>
            <Img w={"350px"} src={bg} />
          </Box>
          <Box w={"600px"}>
            <Text fontSize={"50px"} fontWeight={"bold"} fontStyle={"Roboto"}>
              Turn Any Photo Into Awersome and Make it Look Better
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Homepage;
