import React from 'react'
import heart from './img/heart.png';
import cart from './img/cart.png';



function navbar() {
  return (
    <>
    
        <nav className="navbar" id="navbar">
                <ul className="list">
                    <li className="web_name"><a href='#home'>DailyDelightMart</a></li>
                    <form className="search" role="search">
                      <input className="search_info" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <li className="nav_item"><a href='#home'>Home</a></li>
                    <li className="nav_item"><a href="#category">Categories</a></li>
                    <li className="nav_item"><a href="#first_items">Checkout</a></li>
                    <img src={heart} alt="heart" className='heart' />
                    <img src={cart} alt="cart"  className='cart'/>
                    <button className='login'>Log In</button>
                    <button className='register'>Register</button>
                </ul>
            </nav>
     
    </>
  )
}

export default navbar
