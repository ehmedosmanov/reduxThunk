import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../features/product/productSlice';
const Wishlist = ({ id, title, image, price, count }) => {
    const dispatch = useDispatch();
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
        <button onClick={() => dispatch(removeFromWishlist(id))}>Remove</button>
      </div>
    </div>
  )
}

export default Wishlist
