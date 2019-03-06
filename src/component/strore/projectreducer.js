

const initsate = {
    projects:[{
        id:1,title:"abc",content:"hello everyone"},
        {id:2,title:"abd",content:"hello everyone",
    }]

}




const projectreducer=(state=initsate, action)=>
{
    switch(action.type)
    {
        case "ADD":console.log("project created")
                    break;
        case "ERROR":console.log("error")
        break
        default: console.log("sorry")
    }
 
    return state

}
export default projectreducer
