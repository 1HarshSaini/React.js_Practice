import React,{useContext} from 'react'
import { info } from './ComA';

function ComC() {
    const my_info = useContext(info);
  return (
    <h1>Hello ComC=== {my_info}</h1>
  )
}

export default ComC