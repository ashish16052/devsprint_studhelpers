import React from "react";
import studCartLogo from "../../assets/studCartLogo.png";
import "./navbar.scss";
import ProfileImage from "../../assets/profileIcon.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="brand">
        <img src={studCartLogo} alt="website logo" />
        <div className="siteName">StudCart</div>
      </div>
      <div className="RightSidebar">
        <div className="username">Hi User</div>
        <Link to="/user">
          <img src={ProfileImage} alt="Profile Image" />
        </Link>
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Navbar;
