import React from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import image01 from '../images/tanks/FireAndSmoke01.JPG';
import image02 from '../images/tanks/Rotisserie01.JPG';
import image03 from '../images/tanks/Ribs01.JPG';
import image04 from '../images/tanks/Chicken_Plate01.JPG';
import image05 from '../images/tanks/PulledPork_Plate01.JPG';
import image06 from '../images/tanks/RibsAndChicken_Plate01.JPG';

const Tanks = () => {
 
    return (
        <div className='Project-Panel'>
            <ImageCarousel 
                images={[image01, image02, image03, image04, image05, image06]}
                caption={<a href='https://www.tanksironcladmeats.com'>Tank's Ironclad Meats</a>}
            >
                <p>
                    Design, Production, and Development of Tank's Ironclad
                    Meats by Zack Kramer, Photography by Nadia Swenson
                </p>
                <hr/>
                <p>
                    Tank's site was built with React, has responsive styling, and will continue to improve and grow
                    alongside the company. It is an ongoing project for a company in my hometown of Columbus, Ohio. Since the company was started
                    by my two friends, neither of which are artists, photographers, or graphic
                    designers, I had to create all photos and videos myself. Additionally, I
                    designed the website without any creative guidance.
                </p>
            </ImageCarousel>
        </div>
    )
}

export default Tanks;