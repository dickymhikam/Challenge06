//import hook react
import React, { useState, useEffect } from "react";

//import hook useHitory from react router dom

//import axios
import axios from "axios";
import { toast } from "react-toast";
import Header from "../components/Header";

function Dashboard() {
  //state user
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://shy-cloud-3319.fly.dev/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMe();
  }, []);

  return (
    <>
      <Header />
      <div className="content-dashboard">
        <div className="banner-dashboard"></div>
        <div className="movie-content-dashboard container">
          <div className="movie-info">
            <h1 className="text-center text-white ">
              Hi,<span >{user?.name}</span> with<span>{user?.email}</span>
            </h1>
            <h1 className="text-center text-white">
              This page only can be accessed by user having login
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
