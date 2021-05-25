import React from 'react';
import linkedinIcon from '../images/linkedinIcon.png';
import githubIcon from '../images/GitHub-Mark.png';

export default function ContactMe () {
    return (
        <div className="Contact-Me">
            <h2>Contact Me</h2>
            <p>Why should you contact me? If you...</p>
            <ul>
                <li className='Contact-Me__List-Item'>need a website built</li>
                <li className='Contact-Me__List-Item'>want to play Heroes of the Storm together</li>
                <li className='Contact-Me__List-Item'>have a job opportunity</li>
                <li className='Contact-Me__List-Item'>have any questions about me or what I do</li>
            </ul>
            <p>... I can help! </p>
            <div className='Social-Links__Container'>
                <img onClick={()=>window.open('https://www.linkedin.com/in/zckramer/')} alt='linkedin icon' src={linkedinIcon} className='Social-Link'/>
                <p>zckramer83@gmail.com</p>
                <img onClick={()=>window.open('https://github.com/zckramer')} alt='github icon' src={githubIcon} className='Social-Link'/>

            </div>
        </div>
    )
}