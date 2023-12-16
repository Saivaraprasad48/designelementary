import { Box, Text, Badge, VStack } from "@chakra-ui/react";

interface RemainderCardProps {
  date: string;
  subject: string;
  email: string;
  contactNumber: string;
}

const RemainderCard: React.FC<RemainderCardProps> = ({
  date,
  subject,
  email,
  contactNumber,
}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      {/* Date */}
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Date: {date}
      </Text>

      {/* Subject */}
      <Text fontSize="md" mb={2}>
        Subject: {subject}
      </Text>

      {/* Email */}
      <Text fontSize="md" mb={2}>
        Email: {email}
      </Text>

      {/* Contact Number */}
      <Text fontSize="md" mb={2}>
        Contact Number: {contactNumber}
      </Text>

      {/* Additional information or actions can be added here */}

      {/* Example: Displaying a badge */}
      <VStack spacing={2}>
        <Badge colorScheme="teal">Reminder</Badge>
      </VStack>
    </Box>
  );
};

export default RemainderCard;
