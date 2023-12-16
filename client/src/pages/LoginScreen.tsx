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
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { updateusers } from "../services/state/slices/user.slice";
import useCustomToast from "../hooks/useCustomToast";
import { endpoints } from "../configs/urls";

const LoginScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const showToast = useCustomToast();

  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    setIsPending(true);
    try {
      const response = await axios.post(endpoints.login, formData);
      const data = response.data;
      showToast({
        status: "success",
        title: "Loggedin successfully",
      });
      Cookies.set("authToken", data.token);
      disptach(updateusers({ user: data.user, error: false }));
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error);
      showToast({
        status: "error",
        title: "Invalid Credentials",
        description: `${error.message} error has occured, Try Again`,
      });
      disptach(updateusers({ user: null, error: true }));
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
      <Card mt={20} maxW={"lg"} mx={"auto"}>
        <CardHeader>
          <Heading textAlign={"center"}>Log into account </Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} gap={5} px={10}>
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
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button w={"40%"} colorScheme="blue" onClick={handleLogin}>
            {isPending ? <ButtonSpinner /> : "login"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginScreen;
