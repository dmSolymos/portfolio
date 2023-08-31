import './Projects.css'
import { data } from '../data';
import SingleProject from './SingleProject';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {data.map((project)=>{
        return <SingleProject key={project.id} {...project} />
      })}
    </section>
  )
}
export default Projects
