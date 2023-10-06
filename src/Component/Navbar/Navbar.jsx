import React from 'react'
import { useState, useEffect } from 'react';
import Usa from './USA.png';
import Hidden from '../Hidden/Hidden';
import India from './Flag_of_India.png';
import countries from './Countries.json';
import './Navbar.css';
import America1 from './America1.jpg';
import America2 from './America2.jpg';
import America3 from './America3.jpg';
import America4 from './America4.jpg';
import America5 from './America5.jpg';
import America6 from './America6.jpg';
import America7 from './America7.jpg';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [isActive, setIsActive] = useState(false);

    const [icon, setIcon] = useState('fa-solid fa-bars lastLi')
    const [isEvent, setEvent] = useState('')
    const eventHandleing = (id) => {
        if (id === 'menu' && icon === 'fa-solid fa-bars lastLi') {
            setEvent('menu')
            setIcon('fa-solid fa-xmark lastLi')
        }
        else if (id === 'menu' && icon === 'fa-solid fa-xmark lastLi') {
            setEvent('')
            setIcon('fa-solid fa-bars lastLi')
        }
        setEvent(id)
    }

    const [isShowing, setShowing] = useState(true);
    const showinhHandler = () => {
        setShowing(!isShowing)
        setEvent('')
        setIcon('fa-solid fa-bars lastLi')
    }

    const [isRecord, setRecord] = useState([]);
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/state', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const finaldata = await response.json();
            setRecord(finaldata);
        }
        getUsers();
    }, []);

    const array = ['Pacific', 'West', 'Southwest', 'Midwest', 'Southeast', 'Northeast', 'USA Territories'];

    const [result, setResult] = useState({
        region: null,
        name: null
    })

    var value = ''
    return (
        <div className='nav_bar_container'>
            <nav className='nav_bar' style={{ display: props.showValue ? 'grid' : 'grid' }}>
                <div className='upper_nav'>
                    <div className='first_nav'>
                        <div>
                            <img src={Usa}></img>
                            <figcaption>GoUSA.in</figcaption>
                        </div>
                        <p>The official travel site<br></br> of the USA</p>
                    </div>
                    <div className='last_nav'>
                        <ul>
                            <li style={{ color: 'red' }} onClick={() => eventHandleing('search')}><i className="fa fa-search" aria-hidden="true"></i></li>
                            <li style={{ color: 'red' }}><Link to='/bookmark' style={{color: 'red'}}><i className="fa-regular fa-heart"></i></Link></li>
                            <li style={{ backgroundColor: "red" }} onClick={() => eventHandleing('menu')}><i className={icon} style={{ color: "white" }} ></i></li>

                        </ul>
                    </div>
                </div>
                <div className='down_nav'>
                    <ul>
                        <li id='firstdest' onClick={() => eventHandleing('destination')}>Destinations<i className={isEvent === 'destination' ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li onClick={() => eventHandleing('tripdetails')}>Trips<i className={isEvent === 'tripdetails' ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li><Link to='/experience' style={{color: 'black', textDecoration: 'none'}}>Experiences<i className="fa-solid fa-sort-down"></i></Link></li>
                    </ul>
                </div>
            </nav>

            {/* Destination */}
            {
                isEvent === 'destination' ?
                    <div className='destinationdetails'>
                        <div className='header_bar'></div>
                        <ul>
                            <li style={{ color: 'orange', textDecoration: 'underline' }}>States</li>
                            <li>Cities</li>
                            <li>Parks</li>
                        </ul>
                        <div className='USAplaces'>

                            {array.map((items, id) => {
                                switch (items) {
                                    case "Pacific": return (
                                        <div key={id}>
                                            <img src={America1}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "West": return (
                                        <div key={id}>
                                            <img src={America7}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southwest": return (
                                        <div key={id}>
                                            <img src={America3}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Midwest": return (
                                        <div key={id}>
                                            <img src={America2}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southeast": return (
                                        <div key={id}>
                                            <img src={America6}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Northeast": return (
                                        <div key={id}>
                                            <img src={America5}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "USA Territories": return (
                                        <div key={id}>
                                            <img src={America4}></img>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                }
                            }
                            )}



                        </div >
                        <div className='destinationDetailsBar'>
                            <i className="fa-solid fa-x" onClick={() => eventHandleing('')}></i>
                        </div>
                    </div>
                    :
                    ""
            }

            {/* Trip details */}
            {
                isEvent === 'tripdetails' ? (
                    <div className='tripdetails'>
                        <div className='header_bar'></div>
                        <div className='tripdetailsMiddle'>
                            <div>
                                <img src='https://blog.hubspot.com/hubfs/image-file-extensions.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Idaho Road Trip: of the beaten path to Yellowstone</p>
                            </div>
                            <div>
                                <img src='https://img.freepik.com/free-vector/traditional-diwali-background-with-image-text-space_1017-40122.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>A Specific Pride Road Trip</p>
                            </div>
                            <div>
                                <img src='https://wallpapers.com/images/hd/bubbles-background-cxu66nt9guprib70.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Small Towns and Countri Road through Louisiana and Arkansans</p>
                            </div>
                        </div>
                        <button>View all trips</button>
                        <div className='tripdetailsBar'>
                            <i className="fa-solid fa-x" onClick={() => eventHandleing('')}></i>
                            <div id='upper_side'></div>
                            <div id='down_side'></div>
                        </div>
                    </div>
                )
                    :
                    (
                        ""
                    )
            }

            {/* Menu bar */}
            {
                isEvent === 'menu' && icon === 'fa-solid fa-xmark lastLi' && isShowing ?
                    <div className='main_bar'>
                        <div className='header_bar'></div>
                        <div className='hidden_bar'>
                            <div className='bar_content'>
                                <ul>
                                    <li><img src={India}></img>English (India)<i className="fa-solid fa-caret-down"></i></li>
                                    <div></div>
                                    <li onClick={showinhHandler}>Brand USA</li>
                                    <li onClick={showinhHandler}>Media Inquiries</li>
                                    <li onClick={showinhHandler}><Link to='/contact' style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'block' }}>Contact US</Link></li>
                                    <li onClick={showinhHandler}><Link to='/terms-of-use' style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'block' }}>Terms of Use</Link></li>
                                    <li onClick={showinhHandler}><Link to='/USA-travel-information' style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'block' }}>USA Travel Information</Link></li>
                                    <li onClick={showinhHandler}><Link to='/faq' style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'block' }}>FAQs</Link></li>
                                    <li onClick={showinhHandler}><Link to='/privacy-policy' style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'block' }}>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='side_bar'>
                            <div id='upper_side'></div>
                            <div id='down_side'></div>
                        </div>
                    </div>
                    :
                    ""

            }

            {
                isEvent === 'search' ?
                    <div className='search-Container'>
                        <div className='header_bar'></div>
                        <input type='text' placeholder='usa'></input>
                        <i className="fas fa-search searchIcon"></i>
                        <div className='images-portion'>
                            <div className='left-image'>
                                <div className='left-first-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/07/20/11/00/muffin-8139065_1280.jpg'></img>
                                    <span>
                                        <p className='USAexp'>Experience</p>
                                        <p className='USAdetails'>Flavors of the USA</p>
                                    </span>
                                </div>
                                <div className='left-last-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/05/23/10/55/antarctica-8012488_1280.png'></img>
                                    <span>
                                        <p className='USAexp'>Experience</p>
                                        <p className='USAdetails'>Where to stargaze in the USA</p>
                                    </span>
                                </div>
                            </div>
                            <div className='right-image'>
                                <div className='right-first-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/06/29/17/55/purple-coneflower-8096813_1280.jpg'></img>
                                    <span>
                                        <p className='USAexp'>Experience</p>
                                        <p className='USAdetails'>USA Party Cities</p>
                                    </span>
                                </div>
                                <div className='right-last-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg'></img>
                                    <span>
                                        <p className='USAexp'>Experience</p>
                                        <p className='USAdetails'>USA Through Music</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='searchSlider'>
                            <i className="fa-solid fa-x" onClick={() => eventHandleing('')}></i>
                            <div id='up-side'></div>
                            <div id='down-side'></div>
                        </div>
                    </div>
                    :
                    ""

            }

        </div >
    )
}
export default Navbar;