import {
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { endpoints } from "../configs/urls";

const NewRemainderScreen = () => {
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

  console.log(formData);

  const handleSubmit = async () => {
    const newRemainder = await axios.post(endpoints.createRemainder, formData);
    console.log(newRemainder.data);
  };

  return (
    <Container maxW={"60%"}>
      <Flex flexDir={"column"}>
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Flex>
      <Box>
        <FormLabel>Reccuring Days</FormLabel>
        <Select
          value={formData.recurring}
          onChange={(e) =>
            setFormData({ ...formData, recurring: e.target.value })
          }
        >
          <option value={2}>2 Days</option>
          <option value={3}>3 Days</option>
          <option value={5}>5 Days</option>
          <option value={7}>7 Days</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Category</FormLabel>
        <Select
          value={formData.category}
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
        <Textarea
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </Box>

      <Box>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </Box>
      <Box>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Box>
      <Box>
        <FormLabel>Contact Number</FormLabel>
        <Input
          type="tel"
          value={formData.contact_number}
          onChange={(e) =>
            setFormData({ ...formData, contact_number: e.target.value })
          }
        />
      </Box>
      <Box>
        <FormLabel>SMS</FormLabel>
        <Input
          value={formData.sms}
          onChange={(e) => setFormData({ ...formData, sms: e.target.value })}
        />
      </Box>

      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default NewRemainderScreen;
