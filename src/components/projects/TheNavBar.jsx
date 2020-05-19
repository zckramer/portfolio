import React from 'react';
import ReactDOM from 'react-dom'
import Slider from '../imageCarousel/Slide'

export default function TheNavBar () {

    const images = [
        'http://placekitten.com/500/500',
        'http://placekitten.com/600/600',
        'http://placekitten.com/700/700'
    ]
    
    return (
        <div className="Project__The-Nav-Bar">
            <p>This project started as an assignment for myself and my friend/colleague, Richard Wilson. It was actually our first attempt at...</p>
            <Slider slides={images} />
            <p>There should be an image carousel above here...</p>
        </div>
    )    
}