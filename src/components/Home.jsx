import React from 'react';
import headshot from '../images/zack-headshot.jpg';
import reactImage from '../images/react.webp';
import mongoImage from '../images/mongoDB.png';
import nodejsImage from '../images/nodeJS.png';
import css3Image from '../images/css3.png';

export default function Home (props) {
    return (
        <div className="Home" >
            <div className="Home__Header">
                <h2>Zack Kramer</h2>
                <img 
                    src={headshot} 
                    alt="a headshot of the developer being showcased"
                    id="image__headshot"
                    onClick={props.about}
                    />
                <div className="Home__Intro">
                    <p>dev. gamer. bon vivant.</p>
                </div>
            </div>
            <div className='Home__ImageWheel'>
                <div className='ImageWheel'>
                    <img className='ImageWheel__Item' id='mongoImage' src={mongoImage} alt='Turning wheel representing technical skills' />
                    <img className='ImageWheel__Item' id='reactImage' src={reactImage} alt='Turning wheel representing technical skills' />
                    <img className='ImageWheel__Item' id='nodeImage' src={nodejsImage} alt='Turning wheel representing technical skills' />
                    <img className='ImageWheel__Item' id='cssImage' src={css3Image} alt='Turning wheel representing technical skills' />
                </div>
            </div>
        </div>
    )
}