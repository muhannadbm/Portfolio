import React, { useState } from "react";

import {FaGithub } from "react-icons/fa";
import {BiLinkExternal } from "react-icons/bi";

import {ArrowLeftIcon, 	ArrowRightIcon } from '@heroicons/react/solid'

const Slider = (props) => {
    let {mode, slideIndex, projects, changeIndexNext, dotClick, changeIndexPrev} = props


    return <div className="slider-container">
        {console.log(mode)}
        <div className="slides">
        {projects.map((el, index)=>{
            return <><img className={`project-image ${slideIndex == index + 1 ? "current": ""}`} src={el.image} />
            <div className={`slide-links ${slideIndex == index + 1 ? "current": ""} ${mode ? 'dark-slide-links': ''}`}>
            <a href='https://github.com/muhannadbm' target={'_blank'}><FaGithub /></a>
            <a href='https://www.linkedin.com/in/muhannad-bani-almarje/' target={'_blank'}><BiLinkExternal /></a>
        </div></>
        })}
        {/* <img src={DogsGenerator} alt="Dogs Generator Project"/>
        <img src={DogsGenerator} alt="Dogs Generator Project"/>
        <img src={DogsGenerator} alt="Dogs Generator Project"/>
        <img src={DogsGenerator} alt="Dogs Generator Project"/>
        <img src={DogsGenerator} alt="Dogs Generator Project"/> */}
        </div>

        <button className={`leftArrow ${slideIndex === 1 ? "invisible": ""} ${props.mode == false ? "arrow-light": ''}`} onClick={e=>changeIndexPrev(e)}><ArrowLeftIcon/></button>
        {/* <ArrowLeftIcon className={`leftArrow ${slideIndex === 1 ? "invisible": ""}`} /> */}
        <button className={`rightArrow ${slideIndex === projects.length ? "invisible": ""} ${props.mode == false ? "arrow-light": ''}`} onClick={e=>changeIndexNext(e)} ><ArrowRightIcon /></button>
        <div className="dots-container">
        {projects.map((el, index)=>{
            return <div onClick={e => dotClick(index)} className={`dot ${slideIndex === index + 1? "active-dot" : ""} ${props.mode == false ? "dot-light": ''}`}/>
        })}
        </div>
    </div>
}

export default Slider