import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen";
import NewRemainderScreen from "../../pages/NewRemainderScreen";
import NotFoundScreen from "../../pages/NotFoundScreen";
import LoginScreen from "../../pages/LoginScreen";
import SignupScreen from "../../pages/SignupScreen";
import RemainderViewScreen from "../../pages/RemainderDetailsScreen";
import RouteGaurd from "./RouteGaurd";

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />

      <Route element={<RouteGaurd />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/remainder/add" element={<NewRemainderScreen />} />
        <Route path="/remainder/:id" element={<RemainderViewScreen />} />
      </Route>

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default RouteManager;
