import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="left-footer">
                <img src='/moody.png'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam provident eos culpa est. Distinctio, consectetur suscipit. Neque saepe ipsum eaque sit fugit eius cumque aperiam harum? Quia, dolorum asperiores.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className="center-footer">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="right-footer">
                <h2>Contact us</h2>
                <ul>
                    <li>+91 9876543212</li>
                    <li>foodymoody.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="copyright">
            Copyright {new Date().getFullYear()}
        </p>
    </div>
  )
}

export default Footer