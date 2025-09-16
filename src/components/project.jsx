import Skills from "./skills"

export default function Project({dataProject, dataSkills}){
    return(
        <div className = "project-container">
            <Skills item={dataSkills}/>
            <div className="project" id="Project">
                <h3>Projects</h3>
                <ProjectItems data={dataProject}/>
            </div>
        </div>
        
    )
}

function ProjectItems({data}){
    return(
        <div className="cards">
            {data.map( project => (<div key={project.title} className="project-card">
                <img src={project.image} alt="image"/>
                <h3>{project.title}</h3>
                <p>{project.description.split(" ").slice(0, 20).join(" ")}<span>...</span></p>
                <ul>{project.tech_stack.map( (stack, index) => (<li key={index}>{stack}</li>))}</ul>
                <a href={project.link}>View Project</a>
            </div>))}
        </div>
    )
}