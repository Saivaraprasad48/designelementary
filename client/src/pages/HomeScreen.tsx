import axios from "axios";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { endpoints } from "../configs/urls";
import { useEffect } from "react";
import { updateRemainders } from "../services/state/slices/remainders.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import RemainderCard from "../components/RemainderCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { remainders, error } = useSelector(
    (state: RootState) => state.remainderReducer
  );

  useEffect(() => {
    const fetchRemainders = async () => {
      try {
        const Remainders = await axios.get(endpoints.getReaminders);
        const remainders = Remainders.data.remainders;
        console.log(remainders);
        dispatch(updateRemainders({ remainders, error: false }));
      } catch (error) {
        console.log("error occured:", error);
        dispatch(updateRemainders({ remainders: null, error: true }));
      }
    };

    fetchRemainders();
  }, []);

  if (error) {
    return <h1>Error Occured </h1>;
  }

  return (
    <Box p={10}>
      <SimpleGrid spacing={4} minChildWidth={"sm"}>
        {!error ? (
          remainders ? (
            remainders.map((remainder) => (
              <RemainderCard key={remainder._id} {...remainder} />
            ))
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <p>Error Occured</p>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default HomeScreen;
