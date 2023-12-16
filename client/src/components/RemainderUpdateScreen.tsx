import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { endpoints } from "../configs/urls";
import { RemainderType } from "../libs/types/remainder.types";
import useCustomToast from "../hooks/useCustomToast";
import { useNavigate } from "react-router-dom";

const RemainderUpdateScreen: React.FC<RemainderType> = (remainder) => {
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...remainder });

  const handleUpdate = async () => {
    try {
      axios.put(`${endpoints.updateRemainder}${formData._id}`, formData);
      showToast({
        title: "Remainder updated",
        status: "success",
      });
      navigate(`/`);
      console.log("updated successfully");
    } catch (error: any) {
      console.log(error);
      showToast({
        title: "unable to update Remainder",
        description: `${error.message} error has occured.Try Again`,
        status: "error",
      });
    }
  };

  return (
    <Container display={"flex"} flexDir={"column"} maxW={"60%"} gap={5} mt={20}>
      <Heading textAlign={"center"}>Update Remainder</Heading>
      <Flex gap={5}>
        <Flex flexDir={"column"} w={"50%"}>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            variant="filled"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </Flex>
        <Flex flexDir={"column"} w={"50%"}>
          <FormLabel>Reccuring Days</FormLabel>
          <Select
            variant="filled"
            value={formData.recurring}
            placeholder="for how many days you want to repeat"
            onChange={(e) =>
              setFormData({ ...formData, recurring: parseInt(e.target.value) })
            }
          >
            <option value={2}>2 Days</option>
            <option value={3}>3 Days</option>
            <option value={5}>5 Days</option>
            <option value={7}>7 Days</option>
          </Select>
        </Flex>
      </Flex>

      <Flex gap={5} alignItems={"center"}>
        <Flex flexDir={"column"} w={"50%"}>
          <Box>
            <FormLabel>Category</FormLabel>
            <Select
              value={formData.category}
              variant="filled"
              placeholder="select a category"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="home">Home</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Subject</FormLabel>
            <Input
              value={formData.subject}
              variant="filled"
              placeholder="Enter a Subject Line"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </Box>
        </Flex>

        <Box w={"50%"}>
          <FormLabel>Description</FormLabel>
          <Textarea
            rows={5}
            value={formData.description}
            variant="filled"
            placeholder="Enter Description for your remainder"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </Box>
      </Flex>

      <Flex gap={5}>
        <Box w={"full"}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={formData.email}
            variant="filled"
            placeholder="Enter the Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Box>
        <Box w={"full"}>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="tel"
            value={formData.contact_number}
            variant="filled"
            placeholder="Enter the contact number"
            onChange={(e) =>
              setFormData({ ...formData, contact_number: e.target.value })
            }
          />
        </Box>
        <Box w={"full"}>
          <FormLabel>SMS</FormLabel>
          <Input
            value={formData.sms}
            variant="filled"
            placeholder="Enter the SMS"
            onChange={(e) => setFormData({ ...formData, sms: e.target.value })}
          />
        </Box>
      </Flex>

      <Button colorScheme="teal" maxW={"20%"} onClick={handleUpdate}>
        Submit
      </Button>
    </Container>
  );
};

export default RemainderUpdateScreen;
