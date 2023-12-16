import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonSpinner,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";
import useCustomToast from "../hooks/useCustomToast";
import { endpoints } from "../configs/urls";

const SignupScreen = () => {
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async () => {
    setIsPending(true);

    if (formData.password !== formData.confirmPassword) {
      showToast({
        status: "error",
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
      });

      return;
    }

    try {
      await axios.post(endpoints.signup, formData);
      navigate("/login");
      showToast({
        status: "success",
        title: "New user Added",
        description: `Try to Login with credentials`,
      });
    } catch (error: any) {
      console.error("Login error:", error);
      showToast({
        status: "error",
        title: "Error occured",
        description: `${error.message} error has occured, Try Again`,
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Card maxW={"lg"} mt={20} mx={"auto"}>
        <CardHeader>
          <Heading textAlign={"center"}>create new account</Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} gap={5} px={10}>
          <Input
            type="text"
            placeholder="Enter your name"
            variant={"filled"}
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            variant={"filled"}
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            variant={"filled"}
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            type="password"
            placeholder="Confirm your password"
            variant={"filled"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange(e)}
          />
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button w={"50%"} colorScheme="blue" onClick={handleSignup}>
            {isPending ? <ButtonSpinner /> : "signup"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupScreen;
