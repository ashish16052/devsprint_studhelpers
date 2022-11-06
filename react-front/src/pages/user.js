import React, { useEffect, useState } from "react";
import BuyerCard from "../components/BuyerCard/BuyerCard";
import Navbar from "../components/NavBar/navbar";
import UserProfile from "../assets/profileIcon.svg";
import './User.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import PostForm from "../components/PostForm/PostForm";

const User = () => {

  const user = useSelector((state) => state.user.value)
  const modal = useSelector((state) => state.modal.value)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/product/readByUser/${user._id}`)
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [user,modal])

  return (
    <div className="ShowUserPage">
      <Navbar />
      <div className="UserDetailsBar">
        <img src={user.profilePic} alt="User Profile Image" />
        <p className="Name">{user.name}</p>
      </div>
      <h3 className="posted">
        Posted products({products.length}) :
      </h3>
      <div className="Products">
        {
          products.map((product) => (
            <BuyerCard product={product} editable={true} />
          ))
        }
      </div>
      {
        modal && <PostForm />
      }
    </div>
  );
};

export default User;
