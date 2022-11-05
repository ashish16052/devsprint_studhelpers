import React from 'react'
import './Product.scss'
import { useSelector } from 'react-redux'

const Product = () => {

    const productData = useSelector((state) => state.productModal.value).productData

    return (
        <div className='product-page'>
            <div className='product-modal'>
                Product
            </div>
        </div>
    )
}

export default Product