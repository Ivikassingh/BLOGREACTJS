import React, { Component } from 'react'
import {createproject} from "../action/projectaction"
import {connect} from "react-redux"
export class CreateProject extends Component {
  state={
  title:'',
  content:' '
  }
  handelchange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
   
}
handlesubmit=(e)=>
{
  e.preventDefault();
  this.props.createproject(this.state)
  this.props.history.push("/")
}


  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.handlesubmit}>
      <div class="form-group">
       <label for="title">Title:</label>
       <input type="text" class="form-control" id="title" onChange={this.handelchange}/>
      </div>
      <div class="form-group">
      <label for="content">content</label>
       <textarea class="form-control" id="content" onChange={this.handlechange}></textarea>
        </div>
  
      <button type="submit" class="btn btn-default">Create</button>
       </form>

      </div>
      
    )
  }
}
 const mapDispatchToPrps=(dispatch)=>{
   return{
     createproject:(project)=>dispatch(createproject(project))
   }

 }

 const 
export default connect(null,mapDispatchToPrps)(CreateProject)
