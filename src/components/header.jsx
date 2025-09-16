import {useState} from 'react';

export default function Header({data, state, setState}){
    return(
        <header className="header">
            <h1 className="logo" onClick={()=>setState("home")}>{state === "home" ? ".CartCane" : "👈Back"}</h1>
            <Navbar data={data} setState={setState} state={state}/>
        </header>
    )
}

function Navbar({data, setState, state}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="menu-icon" onClick={()=>setIsOpen(prev => !prev)}>
        ☰
        </div>
        <ul className= {`nav ${isOpen ? "open": ""}`}>
            {data.map((i, index)=> <li className={`btn ${state === i.toLowerCase() ? "active" : ""}`} key={index}><a onClick={()=>setState(i.toLowerCase())}>{i}</a></li>)}
            <li className="btn" key="resume"><a href="./front-end.pdf" download>Resume</a></li>
        </ul>
        </>
    )
}

