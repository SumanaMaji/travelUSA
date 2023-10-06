import React from 'react'
import Map from './Map/Map';
import Slider from './Slider/Slider';
import Bottom from './Bottom/Bottom';
import Middle from './Middle/Middle';
import './Home.css';

export default function HomeFile() {
    return (
        <div className='homeFile'>
            <Slider></Slider>
            <Map></Map>
            <Middle></Middle>
            <Bottom></Bottom>
        </div>
    )
}
