import React, { useState } from 'react'
import America from './America.png';
import './Bookmark.css';
import { useSearchParams } from 'react-router-dom';

export default function Bookmark() {

    const [tabId, setTabId] = useState(1);
    const detectTab = (id) => {
        setTabId(id)
    }
    return (
        <div className='bookmark-container'>
            <div className='header-image'>
                <h1>Your trip around the USA</h1>
                <p>Explore refine your bookmark bellow. Share and save the page link to have your favourate places at your finger tips!</p>
                <div className='buttonGroup'>
                    <button>Email bookmark link</button>
                    <button>Copy bookmark link</button>
                </div>
            </div>
            <i class="fas fa-share-alt share"></i>
            <img src={America} className='america-image'></img>
            <div className='footer-image'>
                <h1>Browse your fevourates</h1>
                <ul>
                    <li id='all' className={tabId === 1 ? 'active' : ''} onClick={() => detectTab(1)}>All</li>
                    <li className={tabId === 2 ? 'active' : ''} onClick={() => detectTab(2)}>States</li>
                    <li className={tabId === 3 ? 'active' : ''} onClick={() => detectTab(3)}>Destination</li>
                    <li className={tabId === 4 ? 'active' : ''} onClick={() => detectTab(4)}>Trips</li>
                    <li className={tabId === 5 ? 'active' : ''} onClick={() => detectTab(5)}>Experineces</li>
                    <li className={tabId === 6 ? 'active' : ''} onClick={() => detectTab(6)}>United Stories</li>
                </ul>
            </div>
            <div className='guide'>
                <h2>Start planning your ultimate USA jurney</h2>
                <p>Here some helpful links to keep exploring USA</p>
                <a>&bull; Experiences to explore</a>
                <br></br>
                <a>&bull; Trip ideas around the USA</a>
            </div>
            <div className='links'>
                <p>Quick links</p>
                <div>
                    <ul>
                        <li>Getting Here & Getting Around<i class="fas fa-bring-forward"></i></li>
                        <li>Visa & Entry<i class="fas fa-bring-forward"></i></li>
                        <li>Travel Planning<i class="fas fa-bring-forward"></i></li>
                        <li>Official Travel Information<i class="fas fa-bring-forward"></i></li>
                    </ul>
                    <ul>
                        <li>Health & Safety<i class="fas fa-bring-forward"></i></li>
                        <li>Shopping & Spending Money<i class="fas fa-bring-forward"></i></li>
                        <li>Accomodations<i class="fas fa-bring-forward"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}