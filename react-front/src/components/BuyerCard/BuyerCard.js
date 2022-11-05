import React from 'react'
import './BuyerCard.scss'
import { useDispatch } from 'react-redux'
import { showProductModal } from '../../reducers/productModal'

const BuyerCard = (props) => {

  const product = {
    _id: props.product._id,
    title: props.product.title,
    description: props.product.description,
    price: props.product.price,
    city: props.product.city,
    seller: props.product.seller,
    tags: props.product.tags,
    picture: props.product.picture,
  }


  const dispatch = useDispatch();

  const setProject = () => {
    console.log("setProduct");
    dispatch(showProductModal(product))
  }

  return (
    <div className='BuyerCard' onClick={setProject}>
      <img className="productPic" src={product.picture} alt='' />
      <div className='productName'>
        <h3>{product.title}</h3>
        <h3 className='prodPrice'>{product.price}</h3>
      </div>
      <p className='prodDescription'>{product.description}</p>
      <p className='prodLocation'>{product.city}</p>
      <div className='tags'>
        {
          product.tags.map((tag) => (
            <p>{tag}</p>
          ))
        }
      </div>
      <div className='prodBid'>Bid</div>
    </div>
  )
}
export default BuyerCard