import React from 'react'
import { Link } from 'react-router-dom'

import Logos from '../Images/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Slid from './Slid'
import CategoryList from './CategoryList';
const Header = () => {
  return (
    <div>
      <nav>
        <div className='container nav__container'>
          <Link to='/' className='nav__logo'>
            <img src={Logos} alt='Navbar' />
          </Link>
          
         
          <ul className='nav__menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/'>NOS Promos</Link>
            </li>
            <li>
              <Link to='/'>Beauté</Link>
            </li>
            <li>
              <Link to='/'>Capilaire</Link>
            </li>
            <li>
              <Link to='/'>Compléments Alimentaires</Link>
            </li>

            <li>
              <Link to='/'>Register</Link>
            </li>
          </ul>

          <button className='nav__toggle-btn'><AiOutlineClose /></button>
        </div>
      </nav>
      <Slid />
     <CategoryList />
     
    </div>
  )
}

export default Header
