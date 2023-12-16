import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { useLocation, useNavigate } from "react-router-dom";
import RemainderUpdateScreen from "../components/RemainderUpdateScreen";
import RemainderInformation from "../components/RemainderInformation";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { endpoints } from "../configs/urls";
import useCustomToast from "../hooks/useCustomToast";

const RemainderDetailsScreen = () => {
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];
  const remainder = useSelector((state: RootState) =>
    state.remainderReducer.remainders?.find((each) => each._id == pathId)
  );

  const [mode, setMode] = useState<"view" | "edit">("view");

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`${endpoints.deleteRemainder}${pathId}`);
      showToast({
        title: "Remainder Deleted",
        status: "success",
      });
      navigate("/");
    } catch (error: any) {
      console.log(error);
      showToast({
        title: "unable to delete Remainder",
        description: `${error.message} error has occured.Try Again`,
        status: "error",
      });
    }
  };

  const handleEditClick = () => {
    mode == "view" ? setMode("edit") : setMode("view");
  };

  return (
    <Flex flexDir={"column"} gap={10}>
      <Flex
        w={"60%"}
        mt={10}
        gap={10}
        justifyContent={"space-between"}
        mx={"auto"}
      >
        <Button onClick={handleEditClick} colorScheme="blue">
          Update
        </Button>
        <Button colorScheme="red" onClick={handleDeleteClick}>
          Delete
        </Button>
      </Flex>
      {mode == "view"
        ? remainder && <RemainderInformation {...remainder} />
        : remainder && <RemainderUpdateScreen {...remainder} />}
    </Flex>
  );
};

export default RemainderDetailsScreen;
