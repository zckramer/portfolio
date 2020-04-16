import React from 'react';
import AboutMeText from './text/AboutMe-Text.jsx'

export default function AboutMe (props) {
    return (
        <div className="About-Me">
            <h2>About me...</h2>
            {AboutMeText()}
        </div>
    )
}