import React, { useState } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'


const FoodItems = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div className="food-item-img-card">
        <div className="food-item-img">
            <img src={props.item.image } alt="" className="food-img" />
            {
              !count ? <img className="add" onClick={()=>setCount(pre=> pre + 1)} src={assets.add_icon_white} alt=''/> :
              <div className="foodCounter">
                <img onClick={()=>setCount(pre=>pre - 1)} src={assets.remove_icon_red} alt=''/>
                <p>{count}</p>
                <img onClick={()=>setCount(pre=>pre + 1)} src={assets.add_icon_green} alt=''/>
              </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{props.item.name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className="food-item-descripton">{props.item.description}</p>
            <p className="food-item-price">${props.item.price}</p>
        </div>
    </div>
  )
}

export default FoodItems