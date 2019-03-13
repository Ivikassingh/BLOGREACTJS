import React from "react"
import  ReactDOM from "react-dom"

import Header from "./component/Header"
import ViewSubscriber from "./component/ViewSubscriber"
import "./index.css"




class App extends React.Component{
  render()
  {
    return(
      <div className="fluid-container text-center">
        <Header/>
        <ViewSubscriber/>
        
       </div>
    )
  }
}



ReactDOM.render(<App/>,document.getElementById("root"))