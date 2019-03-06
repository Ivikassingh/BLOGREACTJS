import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {firestoreConnect} from  "react-redux-firebase"
// we can aslo use moment as a data library

const ProjectDetails =(props)=>{
     let id=props.match.params.id
     const {project} =props;
     if (project)
     {
        return (
        <div className="container">
        <div className="jumboron">
         <div>
             <h1>Content  {id}</h1>
              <h1>details project</h1>
              <h1>Author</h1>
              <h1>{project.createdAt.toDate().toString()}</h1>
         </div>
        </div>
       </div>
       )
     }
     else{
    return(
      <div className="container">
      loading....
        </div>
    )
     }
}

const mapStateToProps=(state,ownprops)=>{
    const id=ownprops.props.match.params.id;
    const projects=state.firestore.data.projects;
    const project=projects?projects[id]:null
    return {
        project:project
    }
}
export default compose(connect(mapStateToProps),firestoreConnect({collection:'project'}))(ProjectDetails)