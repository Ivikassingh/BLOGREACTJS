import React from 'react'
//import projectreducer from '../strore/projectreducer';
const ProjectSummary=({projects})=>
{
    return(

        <div className="container">
         <div className=""><h1>{projects.title}</h1>
         <p>{project.author.fname}</p>
         <p>Time</p>
         </div>
         </div>
    )
}
export default ProjectSummary