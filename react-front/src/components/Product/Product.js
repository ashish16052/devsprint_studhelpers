import React from "react";
import "./Product.scss";
import { useSelector } from "react-redux";
import { hideProductModal } from "../../reducers/productModal";
import { useDispatch } from "react-redux";
import Bidcard from "../BidCard.js/BIdcard";
import SampleImage from "..//../assets/google.webp";
const Product = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideProductModal());
  };
  const productData = useSelector(
    (state) => state.productModal.value
  ).productData;

  return (
    <div className="product-page">
      <div className="product-modal">
        <div className="cancel-btn" onClick={closeModal}>
          X
        </div>
        <div className="DisplayCard">
          <img src={SampleImage}></img>
          <div className="DesAndBid">
            <p>Description</p>
            <div className="BidCardsRow">
              <Bidcard />
              <Bidcard />
              <Bidcard />
              <Bidcard />
              <Bidcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
