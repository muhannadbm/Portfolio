import './App.scss';
import {
  BrowserRouter as Router,Route,NavLink,
  Switch
} from "react-router-dom";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Aboutme from './Components/Aboutme';
import { useState } from 'react';
import {FaGithub, FaLinkedin } from "react-icons/fa";
function App() {
  const[Darkmode, setDarkmode] = useState(false)
  return (
    <Router>
    <div className={`App ${Darkmode ? 'night': ""}`}>
      <header className={`App-header ${Darkmode ? '': "sunny-header"}`}>
      
        <div className={`head ${Darkmode ? '': "sunny-head"}`}>
        <NavLink exact={true} to="/">Home</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="about">About me</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <button onClick={e =>setDarkmode(!Darkmode)} className={`switch-mode ${Darkmode ? '': ' light-mode'}`}>{Darkmode ? 'Dark Mode 🌙': 'Light Mode 🌤️ '}</button>

        </div>
        <div className='social-links'>
        <a href='https://github.com/muhannadbm' target={'_blank'}><FaGithub /></a>
      <a href='https://www.linkedin.com/in/muhannad-bani-almarje/' target={'_blank'}><FaLinkedin /></a>
      </div>
      </header>

      
      <Switch>
            <Route path="/projects">
              <Projects mode = {Darkmode}/>
            </Route>
            <Route path="/contact">
              <Contact mode = {Darkmode}/>
            </Route>
            <Route path="/about">
              <Aboutme mode = {Darkmode}/>
            </Route>
            <Route path="/">
              <Home mode = {Darkmode}/>
            </Route>
          </Switch>

    </div>

    </Router>
  );
}

export default App;
