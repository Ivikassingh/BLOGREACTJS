import React, { Component } from 'react'
import {connect} from "react-redux"
import {signup} from "../action/authaction" 
export class Signup extends Component {
  state={
  email:'',
  pwd:'',
  fname:'',
  lname:''
  }
  handelchange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
   
}
handlesubmit=(e)=>
{
  e.preventDefault();
  this.props.signup(this.state)
}


  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.handlesubmit}>
        <div class="form-group">
       <label for="fname">firstname:</label>
       <input type="text" class="form-control" id="fname" onChange={this.handelchange}/>
      </div>
      <div class="form-group">
      <label for="lname">Last Name</label>
       <input type="text" class="form-control" id="lname" onChange={this.handlesubmit}/>
        </div>
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

      </div>
      
    )
  }
}
const mapStateToProps=(state)=>{
return{
  auth:state.firebase.auth,
  authError:state.auth.authError
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signup:(newuser)=>{dispatch(signip(newuser))}
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Signup)
