import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="20px"
      pt="20px"
    >
      <Text fontSize={"2xl"}>PrettyBg</Text>
      <Box>
        <Button>Premium</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
