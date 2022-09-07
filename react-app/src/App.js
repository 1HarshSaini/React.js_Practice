import React,{useEffect,useState} from 'react'

function App() {
  const[count,updateCount]=useState(0);
  if(count>4){
    alert("limit");
  }
  useEffect(()=>{
    console.log("useEffect");
  })
  return (
    <div>
     
       <h1>useeffect in React = {count}  </h1> 
       
       <button onClick={()=>updateCount(count+1)}>Update counter</button>  
       
    
    </div>

  )
}

export default App