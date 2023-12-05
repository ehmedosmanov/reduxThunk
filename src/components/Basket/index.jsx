import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { CiShoppingBasket } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { addToBasket } from '../../features/product/productSlice'
const Basket = ({ id, title, image, price, count }) => {
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
        <span>Count: {count}</span>
      </div>
    </div>
  )
}

export default Basket
