import React from 'react'
import cart from './img/cart.png';
import { Link } from 'react-router-dom';


const Itemcard = (props) => {
  return (
    <div>
      
            <div className="item-1">
              <div className="orange">
                <Link to='/Orange_info'><img src={props.img} alt="" className='fish_img'/></Link>
                <div className="orange_det">
                  <h3>{props.title}</h3>
                  <p>&#8377;{props.price}</p>
                  <p>&#11088;&#11088;&#11088;&#11088;&#9734;<Link to='Cart'><img src={cart} alt="" className='add_cart'/></Link></p>
                </div>
              </div>
            </div>
        
    </div>
  )
}

export default Itemcard;
