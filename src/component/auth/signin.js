import React, { Component } from 'react'
import {connect} from "react-redux"
import {signIn} from "../action/authaction"
export class Signin extends Component {
  state={
  email:'',
  pwd:''
  }
  handelchange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
   
}
handlesubmit=(e)=>
{
  e.preventDefault();
  this.props.signIn(this.state)
}


  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.handlesubmit}>
      <div class="form-group">
       <label for="email">Email address:</label>
       <input type="email" class="form-control" id="email" onChange={this.handelchange}/>
      </div>
      <div class="form-group">
      <label for="pwd">Password:</label>
       <input type="password" class="form-control" id="pwd" onChange={this.handlesubmit}/>
        </div>
  
      <button type="submit" class="btn btn-default">Submit</button>
       </form>
         <div className="container text-danger">
           {this.props.atuhError?<p>auth error</p>:null}
         </div>
      </div>
      
    )
  }
}

const mapStateToProps=()=>{
  return {
    auth:state.auth.atuhError
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signIn:(cred)=>dispatch(signIn(creds))
  }

}
 export default connect(mapStateToProps, mapDispatchToProps)(signin)
