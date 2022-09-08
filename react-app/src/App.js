import React,{useEffect,useState} from 'react'
import User from'./User'  
function App() {
  const[count,updateCount]=useState(0);
  const[data,setdata]=useState(10);

  return (
    <div>
     
       
       <User count={count} data ={data}/>
       <button  onClick={()=>updateCount(count+1)}>Update counter</button>  
       <button onClick={()=>setdata(data+1)}>Update Data</button>
       
    
    </div>

  )
}

export default App