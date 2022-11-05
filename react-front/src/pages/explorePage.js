import React from "react";
import "./explorePage.scss";
import Cards from "../components/BuyerCard/BuyerCard";
import PostForm from "../components/PostForm/PostForm";
import { useSelector } from 'react-redux'
import Navbar from "../components/NavBar/Navbar.js";
import SearchIcon from "../assets/searchIcon.svg";
import Select from "react-select";

const ExplorePage = () => {

  const modal = useSelector((state) => state.modal.value)
  
  const options = [
    { value: "books", label: "books" },
    { value: "eatables", label: "eatables" },
    { value: "instruments", label: "instruments" },
  ];
  return (
    <div className="explorePage">
      <Navbar />
      <div className="categoryBar">
        <div className="genreDropDown">
          <Select
            isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select genre"
            // onChange={(e) => handleChange(e)}
            // styles={styling}
            placeholder="Select Genre"
          />
        </div>
        <div class="wrapSearchBar">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <img src={SearchIcon} className="searchImage" />
          </div>
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

export default ExplorePage;
