import React,{useReducer} from 'react'
const initialState={
    firstCounter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + action.value};
        case 'decrement':
            return {firstCounter:state.firstCounter - action.value};
        case 'reset':
            return   initialState; 
    }
}
function Use_reducer_with_object() {
    const[count,dispatch]=useReducer(reducer,initialState);
  return (
    <>
       <div>count={count.firstCounter}</div>
       <button onClick={()=>dispatch({type :'increment',value:1})}>Increment+1</button>
       <button onClick={()=>dispatch({type :'decrement',value:1})}>Decrement-1</button>
       <button onClick={()=>dispatch({type :'increment',value:5})}>Increment+5</button>
       <button onClick={()=>dispatch({type :'decrement',value:5})}>deccrement-5</button>
       <button onClick={()=>dispatch({type :'reset'})}>reset</button>
    </>
  )
}

export default Use_reducer_with_object