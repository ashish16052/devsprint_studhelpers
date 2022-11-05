import React from 'react'
import studCartLogo from "../../assets/studCartLogo.png"
import "./navbar.scss";
const navbar = () => {
  return (
    <div className='brand'>
        <img src={studCartLogo} alt='website logo' />
        <div className='siteName'>StudCart</div>
      </div>
  )
}

export default navbar