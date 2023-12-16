import {
  Box,
  Flex,
  HStack,
  Heading,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login");
  };

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

          {pathname == "/signup" && (
            <ChakraLink as={Link} to={"/login"} fontSize="xl">
              Login
            </ChakraLink>
          )}

          {pathname == "/login" && (
            <ChakraLink as={Link} to={"/signup"} fontSize="xl">
              Signup
            </ChakraLink>
          )}

          {pathname !== "/login" && pathname !== "/signup" && (
            <Button onClick={handleLogout}>logout</Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
