import axios from "axios";
import RemainderCard from "../components/RemainderCard";
import { endpoints } from "../configs/urls";
import { useEffect } from "react";

const dummydata = {
  date: "12/5/2003",
  subject: "related to home",
  email: "example@gmail.com",
  contactNumber: "9618378837",
};

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
        <RemainderCard
          date={dummydata.date}
          subject={dummydata.subject}
          email={dummydata.email}
          contactNumber={dummydata.contactNumber}
        />
      </div>
    </>
  );
};

export default HomeScreen;
