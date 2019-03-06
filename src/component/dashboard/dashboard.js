import React from "react";
import Notification from "./notification.js"
import ProjectList from "../projects/projectlist.js"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import {Redirect} from "react-router-dom" 
//to connect the reducer to the react
import {connect} from  "react-redux" 
class Dashboard extends React.Component{
    render()
    {
        const {auth} =this.props
        if(!auth.uid) return<Redirect to="/signin"/>
        return(

            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                <ProjectList projects={this.props}/>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-offset-2">
                <Notification/>
                </div>
            </div>
            </div>
        )
    }
} 
//mapping a state of store to the props of this component

const mapStateToProps=(state)=>{
 return{
         project:state.firestore.ordered.project,
         auth:StaticRange.firebase.auth
 }
}

export default  compose(connect(mapStateToProps),firestoreConnect({collection:'project'}))(Dashboard)