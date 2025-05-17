import {useState} from 'react';

export default function Header(){
    return(
        <header className="header">
            <Navbar />
            <Introduction />
            <img src="src/assets/dp.jpg" alt='image'/>
        </header>
    )
}

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="menu-icon" onClick={()=>setIsOpen(prev => !prev)}>
        ☰
        </div>
        <ul className= {`nav ${isOpen ? "open": ""}`}>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Resume</li>
            <li>Blogs</li>
        </ul>
        </>
    )
}

function Introduction(){
    return(
        <div className="intro">
            <h1>Hi, I am Karthikeyan</h1>
            <p>I'm a passionate web developer with a deep love for building beautiful and functional websites. My journey is fueled by a desire to learn and grow, consistently pushing boundaries and embracing new technologies.</p>
        </div>
    )
}