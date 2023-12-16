import { Box, Text, Divider, Badge, Card } from "@chakra-ui/react";
import { RemainderType } from "../libs/types/remainder.types";

const RemainderInformation: React.FC<RemainderType> = (remainder) => {
  return (
    <>
      <Box
        p={8}
        maxW="80%"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          {remainder?.subject}
        </Text>

        <Divider mb={4} />

        <Card mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Date:
          </Text>
          <Text>{remainder?.date}</Text>
        </Card>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            ID:
          </Text>
          <Text>{remainder?._id}</Text>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Status:
          </Text>
          <Badge
            colorScheme={remainder?.status === "completed" ? "green" : "red"}
            px={2}
            py={1}
          >
            {remainder?.status}
          </Badge>
        </Box>

        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Category:
          </Text>
          <Text>{remainder?.category}</Text>
        </Box>

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
            Recurring:
          </Text>
          <Text>{remainder?.recurring}</Text>
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
      </Box>
    </>
  );
};

export default RemainderInformation;
