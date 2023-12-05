import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { addProduct } from '../../features/product/productSlice'

const AddProduct = () => {
  const { initial, basket, isLoading } = useSelector(state => state.basket)
  const [value, setValue] = useState({
    image: '',
    title: '',
    price: 0
  })

  const dispatch = useDispatch()
  console.log(value)
  useEffect(() => {
    dispatch(addProduct(value))
  }, [dispatch, value])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(value)
    dispatch(addProduct(value))
  }

  return (
    <div className='add-form' onSubmit={e => handleSubmit(e)}>
      <form id='form'>
        <div className='input-box'>
          <label htmlFor=''>image:</label>
          <input
            type='text'
            value={value.image}
            onChange={e => setValue({ ...value, image: e.target.value })}
          />
        </div>
        <div className='input-box'>
          <label htmlFor=''>title:</label>

          <input
            type='text'
            value={value.title}
            onChange={e => setValue({ ...value, title: e.target.value })}
          />
        </div>
        <div className='input-box'>
          <label htmlFor=''>price:</label>
          <input
            type='number'
            value={value.price}
            onChange={e => setValue({ ...value, price: e.target.value })}
          />
        </div>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default AddProduct
