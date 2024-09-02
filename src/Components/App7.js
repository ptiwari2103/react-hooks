import React, {useReducer, useState} from 'react'

const App3 = () => {
//const [count, setCount] = useState(0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        case 'input': {
            return {count: action.payload}
        }
        default: {
            return state
        }
    }
}
const initialState = {count:0}
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {/* <h1>{count}</h1>
    <button onClick={() =>setCount( prev => prev +1)}>Increment</button>
    <button onClick={() =>setCount( prev => prev -1)}>Decrement</button> */}

    <h1>{state.count}</h1>
    <button onClick={() =>dispatch({type: 'increment'})}>Increment</button>
    <button onClick={() =>dispatch({type: 'decrement'})}>Decrement</button>
    <br />
    <input type="number" onChange={(e)=>dispatch({type:'input', payload:Number(e.target.value)})} value={state.count}/>
    </>
  )
}

export default App3