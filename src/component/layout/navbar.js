import React from "react";
import {Link} from "react-router-dom";

import Signedinlinks from "./signedinlik";
import Signoutlink from "./signoutlink";

import {connect} from "react-redux"



const Navbar=()=>
{ const {auth,profile}=props
  const links=auth.uid?<Signedinlinks profile={profile}/>:<Signoutlink/>
     return(
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand " to="/">Blog</Link>
          </div>
          <ul className="nav navbar-nav navbar-right ">

            {links}
          </ul>
        </div>
      </nav>
     )
}

const mapStateToProp=(state)=>{
  
  return{
      auth:state.firebase.auth,
      profile:state.firebase.profile
  }
}

export default connect()(Navbar)