import ProjectCard from './ProjectCard'
import { projectData } from "./Data/Data"
import '../../styles/Projects.css'
const Project = () => {
  return (
    <div className="projectMain">
      <div className="projectData sticky top-0 mt-[100px]">
        {
          projectData.map((item,key)=>{
            return <ProjectCard name={item.name} img={item.img} link={item.link} key={key}/>
          })
        }
      </div>
    </div>
  )
}

export default Project