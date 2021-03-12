import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel'

// import image1 from 'http://www.placekitten.com/500/500'

export default function TheNavBar () {
    const images = [
        "http://placekitten.com/500/500",
        "http://placekitten.com/500/500",
        "http://placekitten.com/500/500",
    ]
    
    return (
        <div className="Project__The-Nav-Bar">
            <p>This project started as an assignment for myself and my friend/colleague, Richard Wilson. It was actually our first attempt at...</p>
            <ImageCarousel images={images} />
        </div>
    )    
}