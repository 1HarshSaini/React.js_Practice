import React, { createContext } from 'react'
import ComB from './ComB'

//create context
const info=createContext();

function ComA() {
  return (
    <>
    <info.Provider value={"To be Show in comC from comA /"}>
        <ComB/>
    </info.Provider>
    
    </>
  )
}

export default ComA
export {info};