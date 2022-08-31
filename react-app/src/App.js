import React,{useState} from 'react'
import './Student'
import Student from './Student'
function App() {
  const [name,setName]=useState("Harsh");
  return (
    <>
    {/* <Student name={"Harsh Saini"} email={"harshsaaii100200"} other={{address:'Delhi',occupation:'student'}}/>
    <Student name={"Vishu Saini"} email={"harsh100200"} other={{address:'Delhi',occupation:'student'}}/> */}

    <Student name={name}/>
    <button onClick={()=>setName("SuryaVanshi")}>Update Name</button>

    </>
  )
}

export default App