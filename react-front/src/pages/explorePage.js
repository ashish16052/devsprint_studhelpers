import React from "react";
import "./explorePage.scss";
import Cards from "../components/BuyerCard/BuyerCard";
import PostForm from "../components/PostForm/PostForm";
import Navbar from "../components/NavBar/navbar.js";
import { useSelector } from 'react-redux'

const explorePage = () => {

  const modal = useSelector((state) => state.modal.value)

  return (
    <div className="explorePage">
      <Navbar />
      <div className="categoryBar">
        <div className="categories">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="buttonsBar">
          <a href="something" class="button1">
            Sell
          </a>
          <a href="something" class="button2">
            Req Buy
          </a>
        </div>
      </div>
      <div className="CardsShow">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      {
        modal && <PostForm />
      }
    </div>
  );
};

export default explorePage;
