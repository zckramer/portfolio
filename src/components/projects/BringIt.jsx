import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import image01 from '../../images/BringItScreen01.png'
import image02 from '../../images/BringItScreen02.png'
import image03 from '../../images/BringItScreen03.png'

export default function BringIt () {
    const images = [
        image01,
        image02,
        image03,
    ]
    return (
        <div className="Project__The-Nav-Bar">
            <p>The final project for my team in We Can Code IT. Our app was called Bring It! We built an API, used mongoDB for the database, and...</p>
            <ImageCarousel images={images} />
        </div>
    )    
}