import React from 'react' 
import logo from '../logo.svg';
import Typical from 'react-typical'
import {BeakerIcon} from '@heroicons/react/solid'
const Home = (props) => {
    let {mode} = props
    let Darkmode = mode;
    return(
        <>
    <section className={`top ${Darkmode ? ' night': " sunny"}`}>
    <div  className={`aboutme ${mode ? '': "sunny-typing"}`}>
    {mode ?     <Typical
             steps={[
                     `Hello! My Name is Muhannad `,
                  1000,
                  'And i am a professional Web developer!',
                  1000,
                  'I love coding 👨‍💻 , space 🌌 , and nature🌳 ',
                  1000,

                ]}
                wrapper="div"
                loop={Infinity}
        /> : 
      
            <Typical
             steps={[
                     `Hello! My Name is Muhannad `,
                  1000,
                  'And i am a professional Web developer!',
                  1000,
                  'I love coding 👨‍💻 , space 🌌 , and nature🌳 ',
                  1000,

                ]}
                wrapper="span"
                loop={Infinity}
        /> }

        </div>
    <span className={`${Darkmode ? 'shootingstar': "no-show"}`}></span>
      <span className={`${Darkmode ? 'shootingstar': "no-show"}`}></span>
      <span className={`${Darkmode ? 'shootingstar': "no-show"}`}></span>
      <span className={`${Darkmode ? 'shootingstar': "no-show"}`}></span>
      <div className={`${Darkmode ? 'moon': "sun"}`}></div>
      <div  className={`${Darkmode ? 'no-show': "cloud"}`}>
        <span className="cloud-top"></span>
        <span className="cloud-puff"></span>
        <span className="cloud-base"></span>
      </div>

      <div  className={`${Darkmode ? 'no-show': "cloud two"}`}>
        <span className="cloud-top"></span>
        <span className="cloud-puff"></span>
        <span className="cloud-base"></span>
      </div>
      <div className="tree">
        <div className="leafes">
        </div>
        <div className="trunk">
          
        </div>
      </div>

      <div className="tree first">
        <div className="leafes">
        </div>
        <div className="trunk">
          {/* <div className="hole"></div> */}
        </div>
      </div>

      <div className="ground"></div>

      </section>

        

    </> )
}

export default Home