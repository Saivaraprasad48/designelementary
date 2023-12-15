import {
  Box,
  Flex,
  HStack,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={10} py={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          <ChakraLink as={Link} to={"/"}>
            REMIND ME!
          </ChakraLink>
        </Heading>
        <HStack spacing={4}>
          <ChakraLink as={Link} to="/remainder/add" fontSize="xl">
            New Remainder
          </ChakraLink>
          <ChakraLink as={Link} to="/login" fontSize="xl">
            Login
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
