import React from 'react';

export default function ContactMe (props) {
    return (
        <div className="Contact-Me">
            <h2>Contact Me</h2>
            <p>Reasons you may want to contact me: </p>
            <ul>
                <li>You may want to offer me a job!</li>
                <li>Perhaps you need some backup in 7 Days to Die, Project Zomboid, or Path of Exile!</li>
                <li>If you have a metal band and think I should come see you play!</li>
                <li>Maybe you need to talk about the latest episode of Castlevania?</li>
            </ul>
            <p>Whatever your need, don't hesitate! Choose a method below!</p>
            <div id="link" onClick={props.linkedIn}>Linked In</div>
            <div id="link" onClick={props.gitHub}>GitHub</div>
            <div>Email: <span>zckramer83@gmail.com</span></div> 
            <hr />
        </div>
    )
}