import {useState} from 'react';
import dp from '../assets/dp.jpg';

export default function Header({data}){
    return(
        <header className="header">
            <Navbar data={data}/>
            <Introduction />
            <img src={dp} alt='image'/>
        </header>
    )
}

function Navbar({data}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="menu-icon" onClick={()=>setIsOpen(prev => !prev)}>
        ☰
        </div>
        <ul className= {`nav ${isOpen ? "open": ""}`}>
            {data.map(i=> <li><a href={`#${i}`}>{i}</a></li>)}
            <li><a href="./front-end.pdf" download>Resume</a></li>
        </ul>
        </>
    )
}

function Introduction(){
    return(
        <div className="intro" id="About">
            <h1>Hi, I am Karthikeyan</h1>
            <p>I'm a passionate web developer with a deep love for building beautiful and functional websites. My journey is fueled by a desire to learn and grow, consistently pushing boundaries and embracing new technologies.</p>
        </div>
    )
}