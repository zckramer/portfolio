import React from 'react';
import headshot from '../images/zack-headshot.jpg';

export default function Home (props) {
    return (
        <div className="Home">
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
    )
}