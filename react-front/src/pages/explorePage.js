import React from "react";
import "./explorePage.scss";
import Cards from "../components/BuyerCard/BuyerCard";
const explorePage = () => {
  return (
    <div className="explorePage">
      <div className="buttonsBar">
        <a href="something" class="button1">
          Sell
        </a>
        <a href="something" class="button2">
         Req Buy
        </a>
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
      </div>
    </div>
  );
};

export default explorePage;
