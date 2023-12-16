import {
  Box,
  Text,
  Badge,
  Button,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { RemainderType } from "../libs/types/remainder.types";

const RemainderCard: React.FC<RemainderType> = ({
  date,
  subject,
  email,
  contact_number,
  _id,
  description,
  recurring,
  sms,
}) => {
  const handleView = () => {};
  const handleMarkCompleted = () => {};

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Badge colorScheme="teal">{subject}</Badge>
        <Text fontSize="sm" color="gray.500">
          ID: {_id}
        </Text>
      </Flex>

      <Heading as="h2" fontSize="xl" mb={2}>
        {description}
      </Heading>

      <Text fontSize="sm" mb={2}>
        Date: {new Date(date).toLocaleDateString()}
      </Text>

      <Divider my={2} />

      <Flex justify="space-between">
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={1}>
            Contact Number
          </Text>
          <Text fontSize="sm">{contact_number}</Text>
        </Box>

        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={1}>
            Email
          </Text>
          <Text fontSize="sm">{email}</Text>
        </Box>

        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={1}>
            SMS
          </Text>
          <Text fontSize="sm">{sms}</Text>
        </Box>

        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={1}>
            Recurring
          </Text>
          <Text fontSize="sm">{recurring} days</Text>
        </Box>
      </Flex>

      <Divider my={2} />

      <Flex justifyContent={"space-between"}>
        <Button colorScheme="teal" size="sm" onClick={handleView}>
          View
        </Button>
        <Button
          colorScheme="green"
          size="sm"
          ml={2}
          onClick={handleMarkCompleted}
        >
          Mark as Completed
        </Button>
      </Flex>
    </Box>
  );
};

export default RemainderCard;
