import React,{useState} from 'react'
import './index.css'
function App() {
  const [status,setStatus]=useState(false);
  return (
    <div className='App'>
        {
          status?<h1>Showing on chenging state</h1>:null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>show</button> */}

        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default App