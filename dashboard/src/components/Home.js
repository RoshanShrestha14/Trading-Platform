import React from "react";
import { RefreshProvider } from "./RefreshContext";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API from "../api";

const Home = () => {
 
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        const frontendUrl =
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_FRONTEND_URL
            : "http://localhost:3000";
        window.location.href = `${frontendUrl}/loginPage`;
      }
      const { data } = await API.get(
        "/verifyUser",

        { withCredentials: true }
      );
      console.log(data);
      const { status, user } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        const frontendUrl =
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_FRONTEND_URL
            : "http://localhost:3000";
        window.location.href = `${frontendUrl}/loginPage`;
      }
    };

    verifyCookie(); // ✅ Add this missing call
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
  const frontendUrl =
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_FRONTEND_URL
            : "http://localhost:3000";
        window.location.href = `${frontendUrl}/loginPage`;
  };

  return (
    <>
      <TopBar user={username} logout={Logout} />
      <RefreshProvider>
        <Dashboard />
      </RefreshProvider>
    </>
  );
};

export default Home;
