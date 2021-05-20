import React, { useState } from 'react';
import Tanks from './ProjectTanks';
import NavBar from './ProjectNavBar';
import YourPageHere from './ProjectYourPageHere';
import PenguinRush from './ProjectPenguinRush';

const AboutMe = (props) => {
    const [projectFocus, setProjectFocus] = useState(<div>initial focus</div>)
    
    function changeProjectFocus (project) {
        setProjectFocus(project);
    }

    return (
        <div className="My-Projects">
            <h2>My Projects</h2>
            <div id="Projects-Bar">
                <div className="Projects-Bar__Item" onClick={()=>changeProjectFocus(Tanks)}>Tank's Ironclad Meats</div>
                |
                <div className="Projects-Bar__Item" onClick={()=>changeProjectFocus(PenguinRush)}>Penguin Rush</div>
                |
                <div className="Projects-Bar__Item" onClick={()=>changeProjectFocus(NavBar)}>The Nav-Bar</div>
                |
                <div className="Projects-Bar__Item" onClick={()=>changeProjectFocus(YourPageHere)}>Your Website Here!</div>
            </div>
            <div id="Project-Panel">
                {projectFocus}
            </div>
        </div>
    )
}
export default AboutMe;