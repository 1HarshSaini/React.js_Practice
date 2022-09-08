import React,{useEffect,useState} from 'react'

function App(props) {
  
  useEffect(()=>{
    console.log("useEffect for data");
  },[props.data])//now useeffect hook only run for data
  
  useEffect(()=>{
    alert ("count:"+props.count);
  },[props.count])//now useeffect hook only run for count
  
  return (
    <div>
     
       <h1>Count : {props.count}  </h1> 
       <h1>Data : {props.data}</h1>
       
    
    </div>

  )
}

export default App