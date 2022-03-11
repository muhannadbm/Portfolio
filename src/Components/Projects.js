import React, { useState } from 'react'
import DogsGenerator from '../Dogs generator.PNG';
import Slider from './Slider';
import Image1 from '../images/product-3-370x270.jpg'
import Image2 from '../images/product-4-370x270.jpg'
import Image3 from '../images/product-5-370x270.jpg'
import Image4 from '../images/product-6-370x270.jpg'

const Projects = (props) => {
    const [projects, SetProjects] = useState([{image: DogsGenerator},
        {image: Image1}, {image: Image2},{image: Image3}, {image: Image4}, {image: DogsGenerator}])
    const [slideIndex, setSlideIndex] = useState(1)
    const changeIndexPrev = (e) =>{
            if(slideIndex !== 1) {
                setSlideIndex(slideIndex - 1)
            }

    }
    
    const changeIndexNext = (e) =>{
    if(slideIndex !== projects.length){
        setSlideIndex(slideIndex + 1)
    } 
    }
    const dotClick = (index) => {
        console.log(index)
        setSlideIndex(index + 1)
    }
    return(
    <>
    <section className={`top-section ${props.mode == false ? "": 'night'}`}>
    <h2>My Projects</h2>
    </section>

    <div className="container">
        <section className="middle-section-projects">
            <div className="project-description">
                <h2>Project title</h2>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta, ipsum accusamus iusto alias molestias! Molestias autem ratione amet eos aliquam pariatur repudiandae error vitae aspernatur libero, facilis minima perspiciatis.</div>
            </div>
            <Slider dotClick={dotClick} changeIndexNext={changeIndexNext} changeIndexPrev = {changeIndexPrev} mode = {props.mode} slideIndex ={slideIndex} projects = {projects}/>
        </section>
               

    </div></>)
}

export default Projects