 import React from "react";
 import ReactDOM from "react-dom";
 import {BrowserRouter} from "react-router-dom";
 import Navbar from "./component/layout/navbar.js"
 import {Switch,Route} from "react-router-dom"
 import Dashbord from "./component/dashboard/dashboard.js"
import ProjectDetails from "./component/projects/projectdetails.js";
import Signin  from './component/auth/signin'
import Signup from './component/auth/signup'
import CreateProject from "./component/projects/createproject.js";
import rootreducer from  "./component/strore/rootreducer"
 import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {getFirestore, reduxFirestore,} from "redux-firestore"
import {getFirebase, reactReduxFirebase} from "react-redux-firebase"
import  {createStore,applyMiddleware,compose} from  "redux"
import fb from "./component/config/fb"
class App extends React.Component{
    render()
    { 
       return(
     <BrowserRouter>
      <div className="fluid-container">
       <Navbar/>
       <Switch>
      <Route exact path="/" component={Dashbord}/>
      <Route path="/project/:id" component={ProjectDetails}/>
       <Route path="/signin" component={Signin}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/createproject" component={CreateProject}/>
       </Switch>

      </div>
     </BrowserRouter>
      

       
       )
       
    }
}


 const store=createStore(rootreducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
 reduxFirestore(fb),
 reactReduxFirebase(fb,{useFirestoreForProfie:true,userProfile:"users",attachAuthIsReady:true})
 
    
 )
 );

 store.firebaseAuthIsReady.then(()=>{ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root")); })

 