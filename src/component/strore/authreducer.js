import { auth } from "firebase";

const initsate = {

}

const authreducer=(state=initsate, action)=>
{
    switch(action.type)
    {
        case "ERROR_LOGIN":return{
            ...state,
            authError:"login failed"
        }
        case "LOGIN_SUC":
        return{
            ...state,
            authError:"logined"
        }
        case "SIGNOUT_COM": 
           console.log("Success")
           return state
        case "SIGNUP":
                  console.log("success");
          return{
              ...state,
              authError:null
          }
          case  "SIGNUPERROR":
          console.log("success");
          return{
              ...state,
              authError:auth.err.message
          }
             
    default: return state;
    }
 
    

}
export default authreducer
