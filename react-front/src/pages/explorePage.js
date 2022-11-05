import React from "react";
import "./explorePage.scss";
import Cards from "../components/BuyerCard/BuyerCard";
import PostForm from "../components/PostForm/PostForm";
const explorePage = () => {
  return (
    <div className="explorePage">
      <div className="buttonsBar">
        <button className="Sellbtn">Sell</button>
        <button className="BuyReqbtn">ReqBuy</button>
      </div>
      <div className="categoryBar">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
      <div className="CardsShow">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default explorePage;
