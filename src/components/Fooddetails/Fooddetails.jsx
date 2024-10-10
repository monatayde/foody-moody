import React from 'react'
import './Fooddetails.css'
import { food_list } from '../../assets/assets'
import FoodItems from '../FoodItems/FoodItems'

const Fooddetails = ({listType}) => {
  return (
    <div className="fooddetails" id='fooddetails'>
        <h2>Top dishes near you</h2>
        <div className="fooddetailsList">
            {food_list.map((item, index)=>{
              console.log(listType, item.listType)
              if(listType === "All" || listType === item.category ){
              return <FoodItems key={index} item = {item}/>
              }  
            })}
        </div>
    </div>
    
  )
  
}

export default Fooddetails