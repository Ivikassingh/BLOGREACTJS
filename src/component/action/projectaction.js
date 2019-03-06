

export const createproject=(project)=>{

return (dsipatch,getState,{getFirebase,getFirestore})=>{


    const firestore=getFirestore();
    const profile=getState().firebase.profile;
    const authid=getState().firebase.auth.uid;

    firestore.collection("projects").add({
        ...project,
        fname:profile.fname,
        lname:profile.lname,
        authorid:authid,
        createat:new Date()
    }).then(()=>{
        dsipatch({type:"ADD",project})
    }).catch((err)=>{

        dsipatch({type:"ERROR", err})
    })


}

}