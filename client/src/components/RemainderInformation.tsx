import { Box, Text, Divider, Badge, Flex, Container } from "@chakra-ui/react";
import { RemainderType } from "../libs/types/remainder.types";

const RemainderInformation: React.FC<RemainderType> = (remainder) => {
  return (
    <>
      <Container display={"flex"} flexDir={"column"} maxW={"60%"} gap={5}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          {remainder?.subject}
        </Text>

        <Divider mb={4} />

        <Flex gap={20}>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Date:
            </Text>
            <Text fontWeight="semibold">{remainder?.date.slice(0, 10)}</Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2}>
              ID:
            </Text>
            <Text fontWeight="semibold">{remainder?._id}</Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2}>
              Status:
            </Text>
            <Badge
              fontWeight="semibold"
              colorScheme={remainder?.status === "completed" ? "green" : "red"}
              px={2}
              py={1}
            >
              {remainder?.status}
            </Badge>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2}>
              Category:
            </Text>
            <Text fontWeight="semibold">{remainder?.category}</Text>
          </Box>

          <Box mb={4}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Recurring:
            </Text>
            <Text>{remainder?.recurring}</Text>
          </Box>
        </Flex>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Subject:
          </Text>
          <Text>{remainder?.subject}</Text>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Description:
          </Text>
          <Text>{remainder?.description}</Text>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Email:
          </Text>
          <Text>{remainder?.email}</Text>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            SMS:
          </Text>
          <Text>{remainder?.sms}</Text>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Contact Number:
          </Text>
          <Text>{remainder?.contact_number}</Text>
        </Box>
      </Container>
    </>
  );
};

export default RemainderInformation;
