import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Context';
import { useContext } from 'react';
import './style.css';



const Header = () => {
  const{cart} = useContext(Cart);
  return (
    <div className='header'>
      <span id='title'>React Context API page</span>
      <ul className='nav'>
        <li className='prod'>
          <Link to="/">Home</Link>
        </li>
        <li className='prod'>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header