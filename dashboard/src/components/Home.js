import React from "react";
import { RefreshProvider } from "./RefreshContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000/loginPage";
      }
      const { data } = await axios.get(
        "http://localhost:3002/verifyUser",
       
        { withCredentials: true }
      );
      console.log(data);
      const { status, user } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        window.location.href = "http://localhost:3000/loginPage";
      } 
    };

    verifyCookie(); // ✅ Add this missing call
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/loginPage";
  };

  return (
    <>
     
      <TopBar user={username} logout= {Logout} />
    
      <RefreshProvider>
        <Dashboard />
      </RefreshProvider>
    </>
  );
};

export default Home;