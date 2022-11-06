import React, { useEffect } from "react";
import studCartLogo from "../../assets/studCartLogo.png";
import "./navbar.scss";
import ProfileImage from "../../assets/profileIcon.svg";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/user'
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch();
  
  const logoutUser = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    dispatch(logout());
  }

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="brand">
          <img src={studCartLogo} alt="website logo" />
          <div className="siteName">StudCart</div>
        </div>
      </Link>
      <div className="RightSidebar">
        <div className="username">Hi {user && user.name}</div>
        <Link to="/user">
          {
            user ?
              <img src={user.profilePic} alt="Profile Image" /> :
              <img src={ProfileImage} alt="Profile Image" />
          }
        </Link>
        <p onClick={logoutUser}>Log Out</p>
      </div>
    </div>
  );
};

export default Navbar;
