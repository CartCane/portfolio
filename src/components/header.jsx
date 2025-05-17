export default function Header(){
    return(
        <header className="header">
            <Navbar />
            <Introduction />
        </header>
    )
}

function Navbar(){
    return(
        <ul className="nav">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Resume</li>
            <li>Blogs</li>
        </ul>
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