import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <div className='navbar'>
          <NavLink to={'/'}>Website</NavLink>
          <ul>
            <li>
              <NavLink to={'/addProduct'}>Add Product</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
