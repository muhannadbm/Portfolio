import React from 'react' 
import logo from '../logo.svg';

const Home = () => {
    return(
        <div>
        <h2>Home Page</h2>
    <div className="middle">
        <p>My Name is Muhannad, and i am a professional Web developer !</p>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
    </div>)
}

export default Home