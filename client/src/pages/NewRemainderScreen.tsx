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
    subject: "",
    message: "",
    email: "",
    contactNumber: "",
    sms: "",
    selectElement: "",
  });

  const handleSubmit = () => {
    const data = axios.post(endpoints.createRemainder,{})
    // Add your logic for handling form submission here
    console.log("Form data submitted:", formData);
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
          value={formData.selectElement}
          onChange={(e) =>
            setFormData({ ...formData, selectElement: e.target.value })
          }
        >
          <option value={2}>2 Days</option>
          <option value={3}>3 Days</option>
          <option value={5}>5 Days</option>
          <option value={7}>7 Days</option>

          {/* Add more options as needed */}
        </Select>
      </Box>
      {/* one section */}

      <Box>
        <FormLabel>Subject</FormLabel>
        <Select
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </Select>
      </Box>

      <Box>
        <FormLabel>Message</FormLabel>
        <Textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
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
          value={formData.contactNumber}
          onChange={(e) =>
            setFormData({ ...formData, contactNumber: e.target.value })
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
      {/* Submit Button */}
      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default NewRemainderScreen;
