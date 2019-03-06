export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebse=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUC"})
        }).catch((err)=>{
            dispatch({type:"ERROR_LOGIN"})
        })
    }
}

export const signOut =()=>{
    return(dispatch,getState,{getFirebase})=>{
        firebase=getFirebase();
        firebase.auth().signOut().then(()=>{dispatch({type:"SIGNOUT_COM"})});
    }
}


export const signup=(newuser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createNewUserWithEmailAndPassword(
            newuser.email,
            newuser.password
        ).then((resp)=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                firstname:newuser.fname,
                lastname:newuser.lastname,
                initials=newuser.firstname[0]+newuser.lastname[0]
            })
        }).then(()=>{
            dispatch({type:"SIGNUP"})
        }).catch((err)=>{type:"SIGNUPERROR",err})
    }

}