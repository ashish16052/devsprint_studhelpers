import React from 'react'
import './BuyerCard.scss'

const BuyerCard = () => {
  return (
    <div className='BuyerCard'>
      <img className="productPic" src='https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg' alt='' />
      <div className='productName'>
        <h3>Product Name</h3>
        <h3 className='prodPrice'>price</h3>
      </div>
      <p className='prodDescription'>Product Description goes here...</p>
      <p className='prodLocation'>Location</p>
      <div className='tags'>
        <p>#tag</p>
        <p>#tag</p>
        <p>#tag</p>
        <p>#tag</p>
      </div>
      <div className='prodBid'>Bid</div>
    </div>
  )
}

export default BuyerCard