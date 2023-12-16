import {
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { endpoints } from "../configs/urls";
import { useNavigate } from "react-router-dom";
import useCustomToast from "../hooks/useCustomToast";

const NewRemainderScreen = () => {
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    category: "",
    subject: "",
    description: "",
    email: "",
    contact_number: "",
    sms: "",
    recurring: "",
  });

  const handleSubmit = async () => {
    try {
      const newRemainder = await axios.post(
        endpoints.createRemainder,
        formData
      );
      navigate("/");
      showToast({
        title: "New Remainder Added succssfully",
        status: "success",
      });
      console.log(newRemainder.data);
    } catch (error: any) {
      console.log(error);
      showToast({
        title: "Error occured",
        description: `${error.message} error has occures.`,
        status: "error",
      });
    }
  };

  return (
    <Container display={"flex"} flexDir={"column"} maxW={"60%"} gap={5} mt={20}>
      <Heading textAlign={"center"}>Create a New Remainder</Heading>
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
              setFormData({ ...formData, recurring: e.target.value })
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

      <Button colorScheme="teal" maxW={"20%"} onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default NewRemainderScreen;
