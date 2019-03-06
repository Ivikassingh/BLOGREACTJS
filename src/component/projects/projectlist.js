import React from 'react'
import ProjectSummary from './projectsummary.js'
import {Link} from "react-router-dom"
const ProjectList=(props)=> {
   
    return(
       
        <div className="container">
         
         
           {props.projects.project && props.projects.project.map(projects=>{
                return(
                  <Link to={"/project"+projects.id}>
                  <ProjectSummary key={projects.id} projects={projects} />
                        </Link>
                   )
           })}
         

        </div>
    )
}
export default ProjectList;