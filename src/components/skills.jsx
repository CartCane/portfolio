export default function Skills({item}){
    return(
        <div className="skills">
            <h1>Skills</h1>
            <div className="skill">
            {item.map( i => <SkillList skill={i} />)}
            </div>
        </div>
    )
}

function SkillList({skill}){
    return(
        <div className="skill-card">
            <h3>{skill.skillDomain}</h3>
            <ul>
                {skill.tech.map( i => <li>{i}</li>)}
            </ul>
        </div>
    )
}
