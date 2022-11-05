import React from 'react'
import studCartLogo from "../assets/studCartLogo.png"
import GoogleLogo from "../assets/google.webp";
import "./loginPage.scss"
const login = () => {

  const loginUser = (e) => {
    e.preventDefault();
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
  }

  return (
    <div className='loginPage'>
      <div className='brand'>
        <img src={studCartLogo} alt='website logo' />
        <div className='siteName'>StudCart</div>
      </div>
      <div className='signInHeading'>Sign in or Sign Up</div>
      <div className='loginOption' onClick={loginUser}>
        <img src={GoogleLogo} />
        <p>Sign in using google</p>
      </div>
      <div className='loginFooter'>By Continuing, you acknowledged that you have read and understood, and agreed to studHelper's Terms of Service and Privacy Policy</div>
    </div>
  )
}
export default login