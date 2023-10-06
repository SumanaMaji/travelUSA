import React from 'react'
import ad from './ad.png';
import './Footer.css';
import Google from './google.jpg';
import Apple from './apple.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_container'>
        <div className='list_item'>
            <div className='first_list'>
                <ul>
                    <li>Brand USA</li>
                    <li>Media Inquiries</li>
                    <li><Link to='/contact' style={{color: 'white', textDecoration: "none", width: '100%'}}>Contact US</Link></li>
                    <li><Link to='/terms-of-use' style={{color: 'white', textDecoration: "none"}}>Terms of Use</Link></li>
                    <li><Link to='/USA-travel-information' style={{color: 'white', textDecoration: "none"}}>USA Travel Information</Link></li>
                </ul>
            </div>
            <div className='last_list'>
                <ul>
                    <li><Link to='/faq' style={{color: 'white', textDecoration: "none"}}>FAQs</Link></li>
                    <li><Link to='/privacy-policy' style={{color: 'white', textDecoration: "none"}}>Privacy Policy</Link></li>
                    <li>Travel Trade</li>
                </ul>
            </div>
        </div>
        <div className='Footer-icons'>
            <a><i className="fa-brands fa-tiktok"></i></a>
            <a><i className="fa-brands fa-facebook-f"></i></a>
            <a><i className="fa-brands fa-youtube"></i></a>
            <a><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className='pic_para'>
            <div className='first'>
                <img src='https://wallpaperaccess.com/full/267434.jpg'></img>
                <p>Find vacation ideas in the latest Visit The USA Guide</p>
            </div>
            <div className='last'>
                <img src='https://www.hdwallpaperspulse.com/wp-content/uploads/2019/02/15/awesome-Full-HD-Nature-Wallpaper.jpg'></img>
                <p>Create a custom itinerary with the USA Trip Planner</p>
            </div>
        </div>
        <div className='ad'>
            <img src={ad} id='ad'></img>
            <img src={Google} id='google'></img>
            <img src={Apple} id='apple'></img>
        </div>
        <div className='last_div'>
            <div className='underline_last_div'></div>
            <p>Visit The USA 2023 Brand USA. All rights reserved.</p>
        </div>
    </div>
  )
}
export default Footer;