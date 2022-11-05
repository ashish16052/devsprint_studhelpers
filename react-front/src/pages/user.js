import React from "react";
import BuyerCard from "../components/BuyerCard/BuyerCard";
import Navbar from "../components/NavBar/navbar";
import UserProfile from "../assets/profileIcon.svg";
import './User.scss'
const user = () => {
  return (
    <div className="ShowUserPage">
      <Navbar />
      <div className="UserDetailsBar">
        <img src={UserProfile} alt="User Profile Image" />
        <p  className="Name">Your Name</p>
      </div>
      <p className="Products">Your Listed products</p>
      <BuyerCard />
    </div>
  );
};

export default user;
