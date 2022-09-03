import React,{useState} from "react";
import './index.css'
function App(){
  const [data,setData]=useState(null);
  function getData(d){
    // console.log(d.target.value);
    setData(d.target.value);
  }
  return(
        <div className="App">
       <h1>Input Type - Box</h1>
       <input type="text" onChange={getData}/>
       <p>{data}</p>
       <button >Print Data={data}</button>
    </div>
      
  );
}
export default App 