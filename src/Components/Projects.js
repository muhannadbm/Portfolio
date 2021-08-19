import React from 'react'
import DogsGenerator from '../Dogs generator.PNG';

const Projects = () => {
    return(<div className="container">
        <h2>My Projects</h2>
        <div className="list">

        <div className="single">
        <a href="test">
        <h4>Dogs image generator</h4> 
        <img src={DogsGenerator} alt="Dogs Generator Project"/>
        <p>Dogs image generator is a website that generates random images of cute dogs</p>
        </a>
        </div>

        </div>
    </div>)
}

export default Projects