import React, { Component } from 'react'

export default class AddSubscriber extends Component {

     state={
         name:"",
         phoneNumber:""
     }
      handleName=(event)=>{
          this.setState({
              name:event.target.value
          })
      } 
      handlePhone=(event)=>{
        this.setState({
            phoneNumber:event.target.value
        })
    }
     handleSubmit=(e)=>{
         e.preventDefault();
          this.props.addNew(this.state)
          //after complete the process we set the state to empty value, it makes our input box fresh as new
           this.setState({
               name:"",
               phoneNumber:""
           })
     }
    
      
      render () {
        return (
            <div className=" container text-center">
            <form  onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="name" className="form-control" id="name" value={this.state.name} onChange={this.handleName} placeholder="Enter Name"/>
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="number" maxLength="10" className="form-control" value={this.state.phoneNumber} id="phone" onChange={this.handlePhone} placeholder="Enter Number"/>
            </div>
            
            <button type="submit" className="btn btn-success">Add subscriber</button>
          </form>
          </div>
        );
      }
    }