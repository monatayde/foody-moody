import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("")

  return (
    <div className="navbar">
        <img src={assets.foody} className='logo'/>
        <ul className='navbar-menu'>
            <li onMouseOver={() => setMenu("home")} className={menu==="home"? "active " : ""}>Home</li>
            <li onMouseOver={() => setMenu("menu")} className={menu==="menu"? "active " : ""}>Menu</li>
            <li onMouseOver={() => setMenu("mobile-app")} className={menu==="mobile-app"? "active " : ""}>mobile-app</li>
            <li onMouseOver={() => setMenu("contact-us")} className={menu==="contact-us"? "active " : ""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=''/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=''/>
                {/* <ShoppingCartIcon/> */}
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar