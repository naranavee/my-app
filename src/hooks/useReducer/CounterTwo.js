import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:0
}
const reducer = (state,action) => {

    switch(action.type){
        case 'increment': return {firstCounter : state.firstCounter+action.value}
        case 'decrement' : return {firstCounter : state.firstCounter-action.value}
        case 'reset':   return initialState
        default: return state

    }
}

export default function CounterTwo() {

    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
    <div><h2>{count.firstCounter}</h2> </div>
    <button onClick={()=>{dispatch({type:'increment',value:1})}} >Increment</button>
    <button onClick={()=>{dispatch({type:'decrement',value:1})}}>decrement</button>
    <button onClick={()=>{dispatch({type:'increment',value:5})}} >Increment by 5</button>
    <button onClick={()=>{dispatch({type:'decrement',value:5})}}>decrement by 5</button>
    <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

    </div>
  )
} 