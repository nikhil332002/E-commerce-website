import React from 'react'
import image from './img/image.jpg';
import earphone from './img/earphone.png';
import shield from './img/sh.png';
import refund from './img/shield.png';
import truck from './img/truck.png';
import vegetable from './img/vegetables.png';
import fruit from './img/fruits.png';
import juice from './img/juice.png';
import fish from './img/fish.png';
import anjur from './img/anjur.png';
import blueberry from './img/blueberry.png';
import cart from './img/cart.png';
import Itemcard from './Itemcard';
import data from './data';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import insta from './img/insta.png';

function home(props) {

  return (
    <>
        <div className="home" id='home'>
            <img src={image} alt="" className='home_img'/>
            <div className="home_info">
                <h2>Let's now shop for daily food & necessary.</h2>
                <p>Freshness and Speed at your Fingertips: <br />Get groceries delivered in 30 minutes with our website or mobile app.</p>
                <a href="#flash_sales"><button className="shopnow">Shop Now</button></a>
            </div>
            <div className="services">
              <div className="support">
                <img src={earphone} alt="" />
                <div className="service_det">
                <h3>Support 24 h</h3>
                <p>Dedicated Support</p>
                </div>
              </div>
              <div className="support">
                <img src={shield} alt="" />
                <div className="service_det">
                <h3>Secure Payment</h3>
                <p>Ensure your money is safe</p>
                </div>
              </div>
              <div className="support">
                <img src={refund} alt="" />
                <div className="service_det">
                <h3>Refundable</h3>
                <p>Damage items can be refunded</p>
                </div>
              </div>
              <div className="support">
                <img src={truck} alt="" />
                <div className="service_det">
                <h3>Free Shipping</h3>
                <p>Free Shipping over &#8377; 500</p>
                </div>
              </div>
            </div>


            <div className="category" id='category'>
              <div className="vegetable">
                <h2>Fresh Vegetable Big Sale</h2>
                <img src={vegetable} alt="" className='vegetable_img'/>
              </div>
              <div className="fruit_juice">
                <div className="fruit">
                  <img src={fruit} alt="" className='fruit_img'/>
                  <div className='fruit_det'>
                    <p>Fresh Fruit Super Sale</p>
                    <a href="#first_items"><button className='fruit_button'>Shop Now</button></a>
                  </div>
                </div>
                <div className="juice">
                  <p>UP TO <br />20%<br />Discount <br />Enjoy your fresh drink</p>
                  <img src={juice} alt="" className='juice_img'/>
                </div>
              </div>
            </div>



            <div className="flash_sales" id='flash_sales'>
              <h2>Flash Sales</h2>
              <div className="days">
                <div className="day">
                  <p>02 <br />DAYS</p>
                </div>
                <div className="day">
                  <p>14 <br />HOURS</p>
                </div>
                <div className="day">
                  <p>26 <br />MINS</p>
                </div>
              </div>
            </div>



            <div className="first_items" id='first_items'>
              <div className="fish">
                <img src={fish} alt="" className='fish_img'/>
                <div className="fish_det">
                  <p>&#11088;&#11088;&#11088;&#11088;&#9734;</p>
                  <h3>Fresh Fish</h3>
                  <p>&#8377;250.00 <img src={cart} alt="" className='add_cart'/></p>
                </div>
              </div>
              <div className="fish">
                <img src={anjur} alt="" className='fish_img'/>
                <div className="fish_det">
                  <p>&#11088;&#11088;&#11088;&#9734;&#9734;</p>
                  <h3>Anjeer</h3>
                  <p>&#8377;400.00 <img src={cart} alt="" className='add_cart'/></p>
                </div>
              </div>
              <div className="fish">
                <img src={blueberry} alt="" className='fish_img'/>
                <div className="fish_det">
                  <p>&#11088;&#11088;&#11088;&#11088;&#9734;</p>
                  <h3>Blueberry</h3>
                  <p>&#8377;250.00 <img src={cart} alt="" className='add_cart'/></p>
                </div>
              </div>
            </div>


              <h3 id='dailybs'>Daily Best Sell</h3>
              <div className='items'>
                {data.productdata.map((item,index)=>{
                  return(<Itemcard img={item.img} title={item.title} price={item.price} item={item} key={index}/>)
                })}
              </div>



              <div className="contact">
                <div className="box" id="box-1">
                  <div className="box-1_det">
                    <h3>Contact Us</h3>
                    <p>You can contact us any way <br /> and we are here to solve your <br /> problem within the best time.</p>
                    <p>BO Street, West</p>
                    <p>info@eg.com</p>
                  </div>
                </div>
                <div className="box" id="box-2">
                  <h2>DailyDelightMart</h2>
                  <p>COPYRIGHT&copy;2024, ALL RIGHTS RESERVED</p>
                  <img src={facebook} alt="" className='contact_img'/><img src={twitter} alt="" className='contact_img'/><img src={insta} alt="" className='contact_img'/>
                </div>
                <div className="box" id="box-3">
                    <div className="box-3_det">
                    <h3>INFORMATION</h3>
                    <p>About Us <br />Contact Us <br />Help and advice <br />Store Location <br />FAQs</p>
                  </div>
                </div>
              </div>
        </div>
    </>
  )
}

export default home;
