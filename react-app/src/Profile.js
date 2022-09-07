import React,{useState} from 'react'

function Profile() {
    const [loggin,setLoggin]=useState(2);


    //   if(loggin){
    //     return (
    //         <div>
    //             <h3>execute in if condition </h3>
    //         </div>
    //     )
    //   }
    //   else{
    //     return (
    //         <div>
    //             <h3> execute in else condition</h3>
    //         </div>
    //     )
    //   }
 
    return( 
        <>
            {/* {loggin?<h2>execute in if condition </h2>:<h2>execute in else condition</h2>} */}

            {loggin==1? <h2>execute on 1</h2>:loggin==2?<h2>execute on 2</h2>:<h3>execute on 3</h3>}
            
        </>
    )


 
  
}

export default Profile    