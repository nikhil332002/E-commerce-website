
import Orange from './img/orange.png';
import React, { useState } from 'react';
// import { useCart } from 'react-use-cart';


function Cart() {
  const [quantity,setquantity]=useState(1);
  const handledecrement=()=>{
    if(quantity > 1){
    setquantity(prevcount => prevcount -1);
    }
  }
  const handleincrement=()=>{
    setquantity(prevcount => prevcount +1);
  }

  const handleCheckout=()=>{
    window.alert("Your Order has been placed successfully!");
  }
  // const {
  //   items,
  //   // isEmpty,
  //   // totalUniqueItems,
  //   // totalItems,
  //   // cartTotal,
  //   // updateItemQuantity,
  //   // removeItem,
  //   // emptyCart,
  //   }=useCart();
  
  return (
    <>
      {/* <div className="carts">
        <div className="shopping-cart">
        {items.map((item,index)=>{
          return(
            <div className="cart_items" key={index}>         
                <img src={item.img} alt="" className='cart_img'/>
                <p>{item.name} <br />&#8377;{item.price}</p>
                <button id='cart_minus'onClick={handledecrement}>-</button>
                <p id='cart_one'>{item.quantity}</p>
                <button id='cart_plus' onClick={handleincrement}>+</button>
                <button className='delete'>&#xe020;</button>
                </div>  
          )
            })}
        </div> */}

         <div className="carts">
        <div className="shopping-cart">
            <div className="cart_items">         
                <img src={Orange} alt="" className='cart_img'/>
                <p>orange - 1kg <br />&#8377;250.00</p>
                <button id='cart_minus'onClick={handledecrement}>-</button>
                <p id='cart_one'>{quantity}</p>
                <button id='cart_plus' onClick={handleincrement}>+</button>
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
              <div>&#8377;250.00</div>
              <div>&#8377;0.00</div>
              <div>&#8377;250.00</div>
            </div>
          </div>
          <button className='checkout' onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
