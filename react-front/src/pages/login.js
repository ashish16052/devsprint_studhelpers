import React from 'react'
import studCartLogo from "../assets/studCartLogo.png"
import GoogleLogo from "../assets/google.webp";
import "./loginPage.scss"
const login = () => {
  return (
    <div className='loginPage'>
        <img src={studCartLogo} alt='website logo'/>
        <div className='siteName'>studCart</div>
        <div className='signInHeading'>Sign in or Sign Up</div>
        <div className='loginOption'>
        <img src={GoogleLogo}/>
        <p>Sign in using google</p>
        </div>
        <div className='loginFooter'>By Continuing, you acknowledged that you have read and understood, and agreed to studHelper's Terms of Service and Privacy Policy</div>
    </div>
  )
}
export default login