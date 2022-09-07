import React,{useState} from 'react'

function App() {
  const [data,setData]=useState('Vishu');
  return (
    <>
    <button onClick={()=>setData('Harsh')}>Button for usestate hook </button>
    <p>{data}</p>
    </>
  )
}

export default App