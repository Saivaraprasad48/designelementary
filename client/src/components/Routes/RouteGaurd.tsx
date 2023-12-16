import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { endpoints } from "../../configs/urls";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/state/store";
import { updateusers } from "../../services/state/slices/user.slice";

import useCustomToast from "../../hooks/useCustomToast";

const RouteGaurd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showToast = useCustomToast();
  const { user, error } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (!Cookies.get("authToken")) {
      navigate("/user/login");
      showToast({
        status: "info",
        title: "You are not Authorized",
        description: "please try to Login/Signup",
      });
    }
  }, []);

  const getuser = async () => {
    const response = await axios.get(endpoints.getuser, {
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    });
    dispatch(updateusers({ user: response.data.user, error: false }));
  };

  if (Cookies.get("authToken") && (!user || error)) {
    getuser();
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default RouteGaurd;
