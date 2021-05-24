import React from 'react';

export default function Header (props) {
    return(
        <nav className="Header">
            <div className="Header-Button" id="Button__Home" onClick={props.gotoHome}>Home</div>|
            <div className="Header-Button" id="Button__AboutMe" onClick={props.gotoAboutMe}>About Me</div>|
            <div className="Header-Button" id="Button__MyProjects" onClick={props.gotoMyProjects}>My Projects</div>|
            <div className="Header-Button" id="Button__ContactMe" onClick={props.gotoContactMe}>Contact Me</div>
        </nav>
    )
}