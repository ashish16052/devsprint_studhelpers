import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useSelector } from "react-redux";
import { hideProductModal } from "../../reducers/productModal";
import { useDispatch } from "react-redux";
import Bidcard from "../BidCard.js/BIdcard";
import SampleImage from "../../assets/google.webp";
import cancel from '../../assets/cancel.svg'
import axios from 'axios'

const Product = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [bid, setBid] = useState('');

  const closeModal = () => {
    dispatch(hideProductModal());
  };

  const productData = useSelector((state) => state.productModal.value).productData;

  const getUser = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/readOne/${productData.seller}`)
    setUser(data);
    console.log(productData);
  }

  useEffect(() => {
    getUser()
  }, [productData])

  const submitBid = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/product/submitBid/${productData._id}`,
      {
        userData: user,
        bid: bid
      })
    console.log(data);
    setBid('')
    closeModal()
  }

  return (
    <div className="product-page">
      <div className="product-modal">
        <div className="cancel-btn" onClick={closeModal}>
          <img src={cancel} />
        </div>
        <div className="DisplayCard">
          <img src={productData.picture}></img>
          <h2>{productData.title}</h2>
        </div>
        <div className="right">
          <div className="DesAndBid">
            {
              user && user._id ?
                <div className="seller">
                  <img src={user.profilePic} />
                  <p>{user.name}</p>
                </div> :
                null
            }
            <p className="desc">{productData.description}</p>
            <div className="BidCardsRow">
              {
                productData.bid &&
                productData.bid.length &&

                productData.bid.map((bid) => (
                  <Bidcard bid={bid}/>
                ))
              }
            </div>
          </div>
          <div className="place-bid">
            <input value={bid} onChange={(e) => setBid(e.target.value)} type='text' placeholder="Place your bid" />
            <div className="submit-bid" onClick={submitBid}>Submit Bid</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
