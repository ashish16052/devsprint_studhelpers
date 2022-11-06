import React from "react";
import "./Bidcard.scss";
import UserImage from "../../assets/profileIcon.svg";
const Bidcard = () => {
  return (
    <div className="BidBuyerDetails">
      <img src={UserImage} className="UserImage" alt="User Profile Image" />
      <p className="UserName">UserName Here</p>
      <p className="UserEmail">Email Here</p>
      <div className="BidSection">
        <p>10,000</p>
      </div>
    </div>
  );
};

export default Bidcard;
