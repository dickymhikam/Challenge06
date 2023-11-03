//import hook react
import React, { useEffect } from "react";

//import hook useHitory from react router dom

import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/authActions";

function Dashboard() {
  //state user
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe(navigate,null,null));
  },[dispatch,navigate])
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
