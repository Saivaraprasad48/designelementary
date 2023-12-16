import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen";
import NewRemainderScreen from "../../pages/NewRemainderScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/remainder/add" element={<NewRemainderScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default RouteManager;
