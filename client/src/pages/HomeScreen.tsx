import axios from "axios";
import RemainderCard from "../components/RemainderCard";
import { endpoints } from "../configs/urls";
import { useEffect } from "react";

const HomeScreen = () => {
  useEffect(() => {
    const fetchRemainders = async () => {
      const Remainders = await axios.get(endpoints.getReaminders);
      console.log(Remainders.data);
      return;
    };

    fetchRemainders();
  }, []);

  return (
    <>
      <div>
        <h1>This is Homescreen</h1>
        {/* <RemainderCard /> */}
      </div>
    </>
  );
};

export default HomeScreen;
