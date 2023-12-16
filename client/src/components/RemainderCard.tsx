import {
  Text,
  Badge,
  Button,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { RemainderType } from "../libs/types/remainder.types";
import { Link } from "react-router-dom";

const RemainderCard: React.FC<RemainderType> = ({
  date,
  subject,
  category,
  _id,
}) => {
  const handleMarkCompleted = () => {
    
  };

  return (
    <Card maxW="sm">
      <CardHeader>
        <Flex justify="space-between" align="center" mb={2}>
          <Badge colorScheme="teal">{category}</Badge>
          <Text fontSize="sm" color="gray.500">
            ID: {_id}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        <Heading as="h2" fontSize="xl" mb={2}>
          {subject}
        </Heading>

        <Text fontSize="sm" mb={2}>
          Date: {new Date(date).toLocaleDateString()}
        </Text>
      </CardBody>
      <CardFooter display={"flex"} justifyContent={"space-between"}>
        <Button colorScheme="teal" size="sm">
          <Link to={`/remainder/${_id}`}>View</Link>
        </Button>
        <Button
          colorScheme="green"
          size="sm"
          ml={2}
          onClick={handleMarkCompleted}
        >
          Mark as Completed
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RemainderCard;
