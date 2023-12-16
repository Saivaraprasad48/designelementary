import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Make sure to adjust the import based on your routing setup

const NotFound = () => {
  return (
    <Box
      h="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="4xl" mb={4}>
        404 - Not Found
      </Heading>
      <Text fontSize="xl" mb={4}>
        Oops! It seems like the page you are looking for doesn't exist.
      </Text>
      <Button colorScheme="teal" size="lg" as={Link} to="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
