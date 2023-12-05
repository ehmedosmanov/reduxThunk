import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { CiShoppingBasket } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'

import './index.scss'
import { addToBasket } from '../../features/product/productSlice'
const Product = ({ id, title, image, price, product, count }) => {
  const { initial, basket, isLoading } = useSelector(state => state.basket)
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className='image'>
        <img src={image} alt={title} />
      </div>

      <div className='card-content'>
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
      <div className='actions'>
        <span className='add-wishlist btn'>
          <CiHeart />
        </span>
        <span
          className='add-wishlist btn'
          onClick={() => dispatch(addToBasket(product))}>
          <CiShoppingBasket />
        </span>
      </div>
    </div>
  )
}

export default Product
