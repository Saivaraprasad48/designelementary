import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { useLocation } from "react-router-dom";
import RemainderUpdateScreen from "../components/RemainderUpdateScreen";
import RemainderInformation from "../components/RemainderInformation";
import { Button, Flex } from "@chakra-ui/react";

const RemainderDetailsScreen = () => {
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];
  const remainder = useSelector((state: RootState) =>
    state.remainderReducer.remainders?.find((each) => each._id == pathId)
  );

  const [mode, setMode] = useState<"view" | "edit">("view");
  const handleEditClick = () => {
    mode == "view" ? setMode("edit") : setMode("view");
  };

  return (
    <>
      <Flex>
        <Button onClick={handleEditClick}>Update</Button>
        <Button>Delete</Button>
      </Flex>
      {mode == "view"
        ? remainder && <RemainderInformation {...remainder} />
        : remainder && <RemainderUpdateScreen {...remainder} />}
    </>
  );
};

export default RemainderDetailsScreen;
