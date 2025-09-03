import React from 'react'
import dp from '../assets/dp.jpg';
import Button from './Button';

export default function Introduction({setState}) {
  return (
    <div className="intro-container">
        <img src={dp} alt='image'/>
        <div className="intro" id="About">
            <h1 className="name">Karthikeyan Raghupathy</h1>
            <h4>I'm a FRONT-END DEVELOPER</h4>
            <div>
                <h6>Who I am?</h6>
                <p>I'm a passionate web developer with a deep love for building beautiful and functional websites. My journey is fueled by a desire to learn and grow, consistently pushing boundaries and embracing new technologies.</p>
            </div>
            <div className="intro-contact">
              <Button color="white" bgColor="orange" fontSize="1.6rem" onClick={()=>setState("project")}>MORE ABOUT ME</Button>
              <a className="btn-whatsapp" href="https://wa.me/917507571653?text=Hi%20Karthikeyan,%20I%20visited%20your%20website!" target="_blank">WhatsApp Me</a>
            </div>
            
        </div>
    </div>
  )
}
