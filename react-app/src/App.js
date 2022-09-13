import React,{useEffect,useState,useReducer} from 'react'
import User from'./User'  
import Form from './Form';
import Counter_usereducer from './Counter_usereducer';
function App() {
  const[count,updateCount]=useState(0);
  const[data,setdata]=useState(10);
  
  const[isError,setError]=useState(false);
  
  return (
    <div>
     
       
       {/* <User count={count} data ={data}/>
       <button  onClick={()=>updateCount(count+1)}>Update counter</button>  
       <button onClick={()=>setdata(data+1)}>Update Data</button> */}

       {/* <button className='btn' onClick={()=>setError(!isError)}>Toggle error</button>
       {isError==true? <h2>error find</h2>:<h2>Not error</h2>} */}
       
       {/* <Form/> */}
       
       <Counter_usereducer/>
       
    </div>

  )
}

export default App