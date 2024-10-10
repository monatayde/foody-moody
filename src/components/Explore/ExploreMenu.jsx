import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = (props) => {

  return (
    <div className="explore-menu" id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((menuIteam, index) =>{
              return (
                <div onClick={()=>{props.listSetType((preItem)=>preItem === menuIteam.menu_name ? "All" : menuIteam.menu_name)}} key={index} className='exploreMenuList'>
                  <img className= {props.listType === menuIteam.menu_name ? "active" : ""} src= {menuIteam.menu_image} />
                  <p>{menuIteam.menu_name}</p>
                  
                </div>
              )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu