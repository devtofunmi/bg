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
              <Text fontSize={"50px"} fontWeight={"bold"} fontStyle={"Roboto"}>
                Make Image Look Better
              </Text>
              <Text fontSize={"25px"} color={"grey"}>
                100% Automatically and Free
              </Text>
            </Box>
            {/* <Box
              mt={"30px"}
              textAlign="center"
              padding="3%"
              border="thin solid black"
            > */}
            {/* <label cursor="pointer" for="inputTag">
                Select Image
                <input type="file" />
              </label> */}
            {/* <Input
                fontSize="16px"
                cursor={"pointer"}
                type="file"
                accept="image/*"
                onChange={uploadImage}
              />
            </Box> */}
            <Box>
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                {/* <Input
                  type="file"
                  name="file"
                  id="file-input"
                  accept="image/*"
                /> */}
                <Button
                  type="submit"
                  variant="outline"
                  as="label"
                  htmlFor="file-input"
                >
                  Choose a file...
                </Button>
              </form>
            </Box>
            {/* <Box>
              <Img height="200" width={"100%"} src={image} />
            </Box> */}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Homepage;
