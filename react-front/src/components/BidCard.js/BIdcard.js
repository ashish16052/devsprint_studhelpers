import React from "react";
import "./Bidcard.scss";
import UserImage from "../../assets/profileIcon.svg";
const Bidcard = (props) => {
  return (
    <div className="BidBuyerDetails">
      <img src={props.bid.userData.profilePic} className="UserImage" alt="User Profile Image" />
      <div className="userInfo">
        <p className="UserName">{props.bid.userData.name}</p>
        <p className="UserEmail">{props.bid.userData.email}</p>
      </div>
      <div className="BidSection">
        <p>{props.bid.bid}</p>
      </div>
    </div>
  );
};

export default Bidcard;
