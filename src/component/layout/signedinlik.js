import React from "react";
import {NavLink} from "react-router-dom";
import SignOut from "../action/authaction"
import {connect} from "react-redux"

const Signedinlinks=()=>
{
     return(
        
        
          
          <ul className="nav navbar-nav">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><a onClick={props.signOut()}>Logout</a></li>
            <li><NavLink to="/" className="btn">{props.profile.initials}</NavLink></li>
          </ul>
       
   
     )
}

 const mapDispatchToProps=(dispatch)=>{
      return{
           signOut:()=>dispatch(signOut())
      }
 }
export default  connet(null,mapDispatchToProps)(Signedinlinks)