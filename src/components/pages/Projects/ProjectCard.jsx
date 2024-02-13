import { Link } from "react-router-dom"
import '../../styles/Projects.css'

const ProjectCard = ({name,link}) => {
    return (
        <div className="projectCard">
            <div className="projectCardInfo">
                <h2>{name}</h2>
                <Link to={link} target="_blank" className="btn projectButton-blue">View Project</Link>
            </div>
        </div>
    )
}

export default ProjectCard