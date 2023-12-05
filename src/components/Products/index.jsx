import React, { useEffect } from 'react'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product'
import { getAllProduct } from '../../features/product/productSlice'
import Basket from '../Basket'

const Products = () => {
  const { initial, basket, isLoading } = useSelector(state => state.basket)
  console.log(initial)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div className='container'>
      <div className='products'>
        {isLoading ? (
          <p>...loading</p>
        ) : (
          initial.map(item => (
            <Product key={item.id} {...item} product={item} />
          ))
        )}
      </div>
      <div className='basket'>
        <h1>Basket:</h1>
        <div className='products'>
          {isLoading ? (
            <p>...loading</p>
          ) : (
            basket.map(item => (
              <Basket key={item.id} {...item} count={item.count} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
