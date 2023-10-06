import React from 'react'
import './Search.css';

export default function Search() {
    return (
        <div className='search-Container'>
            <div className='header_bar'></div>
            <input type='text' placeholder='usa'></input>
            <div className='image-portion'>
                <div className='left-image'>
                    <div className='left-first-image'>
                        <img src='https://cdn.pixabay.com/photo/2023/07/20/11/00/muffin-8139065_1280.jpg'></img>
                        <span>
                            <p className='exp'>Experience</p>
                            <p className='USAdetails'>Flavors of the USA</p>
                        </span>
                    </div>
                    <div className='left-last-image'>
                        <img src='https://cdn.pixabay.com/photo/2023/05/23/10/55/antarctica-8012488_1280.png'></img>
                        <span>
                            <p className='exp'>Experience</p>
                            <p className='USAdetails'>Where to stargaze in the USA</p>
                        </span>
                    </div>
                </div>
                <div className='right-image'>
                    <div className='right-first-image'>
                        <img src='https://cdn.pixabay.com/photo/2023/06/29/17/55/purple-coneflower-8096813_1280.jpg'></img>
                        <span>
                            <p className='exp'>Experience</p>
                            <p className='USAdetails'>USA Party Cities</p>
                        </span>
                    </div>
                    <div className='right-last-image'>
                        <img src='https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg'></img>
                        <span>
                            <p className='exp'>Experience</p>
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
    )
}
