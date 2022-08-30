import React from 'react';
import ReactDom from 'react-dom';
// import './index.css'
import App from './App'


const Image=()=> <img src="https://images-eu.ssl-images-amazon.com/images/I/41txBobui9S.
_SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />

const Title=()=> <h3>The Everyday Hero Manisfesto</h3>
const Author=()=><h2>James Billion</h2>

const Book=()=>{
  return (
    <>
       
      <Image/>
      <Title/>
      <Author/>
      
    </>
  )
}
function Booklist() {
  return (
    <section className='booklist'>
    {/* <Book/> */}
    
   <App />

    </section>
    )
  
}


ReactDom.render(<Booklist/>,document.getElementById('root'));




