import React, { useEffect } from "react";
import studCartLogo from "../../assets/studCartLogo.png";
import "./navbar.scss";
import ProfileImage from "../../assets/profileIcon.svg";
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector((state) => state.user.value)

  return (
    <div className="Navbar">
      <div className="brand">
        <img src={studCartLogo} alt="website logo" />
        <div className="siteName">StudCart</div>
      </div>
      <div className="RightSidebar">
        <div className="username">Hi {user && user.name}</div>
        {
          user ?
            <img src={user.profilePic} alt="Profile Image" /> :
            <img src={ProfileImage} alt="Profile Image" />
        }
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Navbar;
