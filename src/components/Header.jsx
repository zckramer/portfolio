import React from 'react';

export default function Header (props) {
    return(
        <nav className="Header">
            <button className="Header-Button" id="Button__Home" onClick={props.gotoHome}>Home</button>
            <button className="Header-Button" id="Button__AboutMe" onClick={props.gotoAboutMe}>About Me</button>
            <button className="Header-Button" id="Button__MyProjects" onClick={props.gotoMyProjects}>My Projects</button>
            <button className="Header-Button" id="Button__ContactMe" onClick={props.gotoContactMe}>Contact Me</button>
        </nav>
    )
}