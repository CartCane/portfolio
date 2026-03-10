import Skills from "./skills"
import Cards from "./cards"

export default function Project({dataProject, dataSkills}){
    return(
        <div className = "project-container">
            <Skills item={dataSkills}/>
            <div className="project" id="Project">
                <h3>Projects</h3>
                <div className="cards">{dataProject.map(data => <Cards data={data}/>)}</div>
            </div>
        </div>
        
    )
}