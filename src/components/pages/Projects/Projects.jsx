import ProjectCard from './ProjectCard'
import { projectData } from "./Data/Data"
import '../../styles/Projects.css'
const Project = () => {
  return (
    <div className="projectMain">
      <div className='projectHeading'>
        <h1>
          Discover The Project that we are proud of.
        </h1>
        <button className='btn projectButton-blue'>Go To The Section</button>
      </div>
      <div className='projectData'>
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