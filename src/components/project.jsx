export default function Project({data}){
    return(
        <div className="project" id="Project">
            <h1>Projects</h1>
            <ProjectItems data={data}/>
        </div>
    )
}

function ProjectItems({data}){
    return(
        <div className="cards">
            {data.map( project => (<div key={project.title} className="project-card">
                <img src={project.image} alt="image"/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.tech_stack.map( (stack, index) => (<li key={index}>{stack}</li>))}</ul>
                <a href={project.link}>View Project</a>
            </div>))}
        </div>
    )
}