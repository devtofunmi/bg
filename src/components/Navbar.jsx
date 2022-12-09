import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      //   mx="20px"
      pt="20px"
    >
      <Text
        color={"#51626d"}
        fontSize={"4xl"}
        fontWeight={"semibold"}
        fontStyle={"Roboto"}
      >
        PrettyBg
      </Text>
      <Box>
        <Button
          bg={"blue.300"}
          color={"white"}
          _hover={{
            bg: "blue.200",
          }}
        >
          Premium
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
