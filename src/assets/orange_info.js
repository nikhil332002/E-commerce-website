import React from 'react'
import orange_1 from './img/orange_1.png';
import orange_2 from './img/orange_2.png';
import orange_3 from './img/orange_3.png';
import orange from './img/orange.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import insta from './img/insta.png';

function orange_info(props) {
  return (
    <>
      <div className="orange_box">
        <div className="box-1">
            <img src={orange_1} alt="" className='orange_all'/>
            <img src={orange_2} alt="" className='orange_all'/>
            <img src={orange_3} alt="" className='orange_all'/>
        </div>
        <div className="box-2">
            <img src={orange} alt="" />
        </div>
        <div className="box-3">
            <p>Fruits</p>
            <h3>Fresh Orange Imported, 1Kg</h3>
            <p>MRP - &#8377;409.59 &#11088;&#11088;&#11088;&#11088;&#9734;</p>
            <p>Price: &#8377;298(&#8377;298/kg)</p>
            <p>You Save: 27% OFF</p>
            <p>(inclusive of all taxes)</p>
            <h3>Quantity</h3>
            <div className="quantity">
                <button id='minus'>-</button>
                <p id='one'>1</p>
                <button id='plus'>+</button>
                <button className='add_to_c'>Add to Cart</button>
            </div>
            <button className='buy_now'>Buy Now</button>
            <p>Share: <img src={facebook} alt="" className='share'/><img src={twitter} alt="" className='share'/><img src={insta} alt="" className='share'/></p>
        </div>
      </div>
      <div className="review">
        <h2>Reviews</h2>
        <div className="review_bar">
          <p>Customer reviews</p>
          <p>4.0 &#11088;&#11088;&#11088;&#11088;</p>
          <div class="bar1">
            <p class="skills_java">5 Star</p>
            <span class="b1" id="b1">.</span>
            <div class="skill_bar">
              <div class="b1_java" id="b1_1">.</div>
            </div>
          </div>
          <div class="bar1">
            <p class="skills_java">4 Star</p>
            <span class="b1" id="b2">.</span>
            <div class="skill_bar">
              <div class="b1_java" id="b2_2">.</div>
            </div>
          </div>
          <div class="bar1">
            <p class="skills_java">3 Star</p>
            <span class="b1" id="b3">.</span>
            <div class="skill_bar">
              <div class="b1_java" id="b3_3">.</div>
            </div>
          </div>
          <div class="bar1">
            <p class="skills_java">2 Star</p>
            <span class="b1" id="b4">.</span>
            <div class="skill_bar">
              <div class="b1_java" id="b4_4">.</div>
            </div>
          </div>
          <div class="bar1">
            <p class="skills_java">1 Star</p>
            <span class="b1" id="b5">.</span>
            <div class="skill_bar">
              <div class="b1_java" id="b5_5">.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default orange_info
