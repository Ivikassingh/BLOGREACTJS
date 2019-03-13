import React, { Component } from 'react'
import AddSubscriber from "./AddSubscriber"



export default class ViewSubscriber extends Component {
        // state with predfined data 
           state={
            phone:[{
                id:1,
                name:"Vikas",
                phoneNumber:8899112233
            },
            {
                id:2,
                name:"John",
                phoneNumber:564313131
            }
             ]
        }
     // this function use to add record in state
     addNewRecord=(data)=>{ 
         data.id=Math.floor(Math.random()*1000);//adding new object id
         let newRecord=[...this.state.phone,data] // create a new Record with upcoming State
         this.setState({
             phone:newRecord
         })

         }

     // we use it delete the data according to the id we receive
      deleteRecord=(id)=>{
         
        let newRecord = this.state.phone.filter((phone)=>{
            
            return  phone.id!==id})
             this.setState({
                 phone:newRecord
             })
          }
  

    render() {
          
           
        return ( 
            <div className="container text-center ">
                 { this.state.phone.length!==0?<div>
                        <ul className="list-group">
                            {this.state.phone.map((phone)=>{
                                return   (
                                        <div key={phone.id} className="list-group-item">
                                        <h3><span id="nameid">Name:-</span><span id="nameval">{phone.name}</span> <span id="number">Phone:-  </span><span id="numberval">{phone.phoneNumber}</span></h3>
                                        <button  className="btn btn-danger" onClick={()=>{this.deleteRecord(phone.id)}}>Delete</button>
                                        </div>
                                        )
                                 })}
                         </ul>
                          </div>:<h1>NO RECORD PLEASE ADD ONE</h1>}
                <AddSubscriber addNew={this.addNewRecord}/>
            </div>
        )
    }
}
