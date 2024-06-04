
import Orange from './img/orange.png';
import React from 'react';
import tomato from './img/tomato.png';
import fish from './img/fish.png'


function Cart() {
  return (
    <>
      <div className="carts">
        <div className="shopping-cart">
            <div className="cart_items">
                <img src={Orange} alt="" className='cart_img'/>
                <p>Fresh Orange - 1kg <br />&#8377;298.00</p>
                <button id='cart_minus'>-</button>
                <p id='cart_one'>1</p>
                <button id='cart_plus'>+</button>
                <button className='delete'>&#xe020;</button>
            </div>
            <div className="cart_items">
                <img src={tomato} alt="" className='cart_img'/>
                <p>Fresh Tomato - 1kg <br />&#8377;298.00</p>
                <button id='cart_minus'>-</button>
                <p id='cart_one'>1</p>
                <button id='cart_plus'>+</button>
                <button className='delete'>&#xe020;</button>
            </div>
            <div className="cart_items">
                <img src={fish} alt="" className='cart_img'/>
                <p>Fresh Fish - 1kg <br />&#8377;298.00</p>
                <button id='cart_minus'>-</button>
                <p id='cart_one'>1</p>
                <button id='cart_plus'>+</button>
                <button className='delete'>&#xe020;</button>
            </div>
        </div>
      
        <div className="shipping">
          <h3>Shipping</h3>
          <div className="shipping_flex">
            <div className="cart_box1">
              <div>Subtotal</div>
              <div>Delivery</div>
              <div>Total</div>
            </div>
            <div className="cart_box2">
              <div>&#8377;700.00</div>
              <div>&#8377;0.00</div>
              <div>&#8377;700.00</div>
            </div>
          </div>
          <button className='checkout'>Proceed to Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
