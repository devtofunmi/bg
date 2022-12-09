import { Box, Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dropzone from "../components/Dropzone";
import bg from "../assets/choose.png";
const Homepage = () => {
  const [image, setImage] = useState("");

  function uploadImage(e) {
    setImage(e.target.files[0]);
    console.log(e.target.files);
  }

  return (
    <>
      <Box h={"100vh"} mx={"70px"}>
        <Navbar />
        <Flex
          justifyContent={"space-between"}
          mt={"30px"}
          direction={["column", "row"]}
        >
          <Box>
            <Img w={"350px"} src={bg} />
          </Box>
          <Box>
            <Box w={"500px"}>
              <Text
                fontSize={"40px"}
                fontWeight={"bold"}
                fontStyle={"Roboto"}
                color={"#51626d"}
              >
                Make Image Look Better
              </Text>
              <Text fontSize={"20px"} color={"grey"}>
                100% Automatically and Free
              </Text>
            </Box>
            {/* <Box
              mt={"30px"}
              textAlign="center"
              padding="3%"
              border="thin solid black"
            >
              <Input
                fontSize="16px"
                cursor={"pointer"}
                type="file"
                accept="image/*"
                onChange={uploadImage}
              />
            </Box> */}

            <Box
              mt={"30px"}
              bg={"#ffffff"}
              borderRadius={"20px"}
              w={"400px"}
              h={"300px"}
              shadow={"2xl"}
            >
              <Flex justify={"center"}>
                <Button
                  mt={"130px"}
                  fontSize={"25px"}
                  p={"30px"}
                  color={"white"}
                  bg={"blue.300"}
                  borderRadius={"10px"}
                  _hover={{
                    bg: "blue.200",
                  }}
                >
                  Upload Image
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Homepage;
