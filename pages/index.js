import Wrapper from "./layout/wrapper";
import Home2 from "./home/home_2";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserToken, setUserData } from "../features/auth/userslice";

import useSWR from "swr";

const MainRoot = () => {
  const dispatch = useDispatch();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      dispatch(setUserToken(token));
    } else {
      localStorage.removeItem("user");
      dispatch(setUserData(null));
    }
  }, [token, dispatch]);
  return (
    <Wrapper>
      <Home2 />
    </Wrapper>
  );
};

export default MainRoot;
