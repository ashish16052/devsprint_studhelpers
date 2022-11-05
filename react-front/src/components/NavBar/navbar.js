import React from "react";
import studCartLogo from "../../assets/studCartLogo.png";
import "./navbar.scss";
import ProfileImage from "../../assets/profileIcon.svg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="brand">
        <img src={studCartLogo} alt="website logo" />
        <div className="siteName">StudCart</div>
      </div>
      <div className="RightSidebar">
        <img src={ProfileImage} alt="Profile Image" />
          <p>Log Out</p>
      </div>
    </div>
  );
};

export default Navbar;
