
// ===================== Hook example =====================
//custom hook example
/*
import react, { useState } from 'react';
const useMycount = (initialvalue = 0) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialvalue);
  return { count, increment, decrement, reset };
}

const App = () => {
  const { count, increment, decrement, reset } = useMycount(6);
  return (
    <div>
      <h1>Custom hook</h1>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App;
*/


/*
import react, { useState } from 'react';
const MyCustom = () =>{
  const [name,setName] = useState('');
   
  const handleinput = (e) =>{
    setName(e.target.value);
    localStorage.setItem("username",name);
  }
  return [name,handleinput];
}
const App = () => {
  // const [name,setName] = useState('');   
  // const handleinput = (e) =>{
  //   setName(e.target.value);
  //   localStorage.setItem("username",name);
  // }
  const [name,handleinput] = MyCustom();
return (
  <div>
    <div>
      <input type="text" name="uname" value={name} onChange={handleinput}></input>
    </div>
    <div>
      Username = {localStorage.getItem("username")};
    </div>    
  </div>
)
}
export default App;
*/


//useContext example
/*
import react, { createContext, useContext, useState } from 'react';
const CreateElectric = createContext();
const ProviderElectric = ({children}) =>{
  const [light,setLight] = useState('light');
  const togglelight = () =>{
    setLight((light==='light')?'dark':'light');
  }
  return <CreateElectric.Provider value={{light,togglelight}}>
    {children}
  </CreateElectric.Provider>
}

const ConsumeLigth = () =>{
  const {light,togglelight} = useContext(CreateElectric);
  return(
    <div>
      <h1>Child : {light}</h1>
      <p>
        <button onClick={togglelight}>Change light</button>
      </p>
    </div>
  )
}
const App = () => {

return (
  <div>
    <ProviderElectric>
    <ConsumeLigth></ConsumeLigth>
    </ProviderElectric>
  </div>
)
}
export default App;
*/


//useRuducer
/*
import {react,useReducer} from 'react';
const App = () => {
const reducer =(state,action)=>{
  switch(action.type){
    case 'in': return {count:state.count + 1}; 
    case 'de': return {count:state.count - 1};
    case 're': return {count:0};
  }  
} 
  const intialState = {count:0};
  const [state, dispatch] = useReducer(reducer, intialState)
return (
  <div>
    <p>count={state.count}</p>
    <p>
      <button onClick={()=>dispatch({type:'in'})}>Increment</button>
    </p>
    <p>
      <button onClick={()=>dispatch({type:'de'})}>Decrement</button>
    </p>
    <p>
      <button onClick={()=>dispatch({type:'re'})}>Reset</button>
    </p>
    
  </div>
)
}
export default App;
*/



//useMemo example
/*
import react, { useState,useMemo } from 'react';
const App = () => {
const [num,setNum] = useState(1);
const [count,setCount] = useState(0);
// const doublenum = () =>{
//   console.log("Calculate");
//   return Math.pow(2,num);
// }
const doublenum = useMemo(() =>{
  console.log("Calculate");
  return Math.pow(2,num);
},[num]);

return (
  <div>
    <h1>Count:{count}</h1>
    <h1>Number:{num}</h1>
    
    <h1>double number:{doublenum}</h1>
    <p><button onClick={()=>setNum(prev=>prev+1)}>Icnrement number</button></p>
    <p><button onClick={()=>setCount(prev=>prev+1)}>Icnrement count</button></p>
  </div>
)
}
export default App;
*/


//useCallback
/*
import React from 'react';
import react, { useState,useCallback } from 'react';
const Childcom = React.memo((props) => {
  console.log("child component " + props.title);
  return (
    <div>
      <h1>title = {props.title}</h1>
      <p>{props.count}</p>
      <p>
        <button onClick={props.handleaction}>Increment</button>
      </p>
    </div>
  )
})
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handlecount = useCallback(() => {
    setCount(prev => prev + 1)
  },[])

  const handlenumber = useCallback(() => {
    setNumber(prev => prev + 1)
  },[])
  
  return (
    <div>
      <Childcom title="Count" count={count} handleaction={handlecount}></Childcom>
      <Childcom title="Number" count={number} handleaction={handlenumber}></Childcom>
    </div>
  )
}
export default App;
*/


//useref hook example
/*
import react, { useRef, useState } from 'react';
const App = () => {
const inputhref = useRef(null);
const [input,setInput] = useState('');
const handleref = () =>{
  inputhref.current.focus();
}
return(
  <div>
    <h1>Use hook example</h1>
    <p>{input}</p>
    <div>
      <input type="text" name="userinput" ref={inputhref} value={input} onChange={(e)=>setInput(e.target.value)}></input>
    </div>
    <div>
      <button onClick={handleref}>show href</button>
    </div>
  </div>
)
}
export default App;
*/



/*
//use forwardref hook example
import react, { forwardRef, useRef } from 'react';
const Childapp = forwardRef((props) => {
  return(
    <div>
      <p>
      <input type="text" name="userinput" ref={props.refkey} ></input>
      </p>
    </div>
  )
})
const App = () => {
const inputhref = useRef(null);

const handleref = () =>{
  inputhref.current.focus();
}
return(
  <div>
    <h1>Use forwadref example</h1>
    <Childapp refkey={inputhref}></Childapp>
    <div>
      <button onClick={handleref}>show child input</button>
    </div>
  </div>
)
}
export default App;
*/



/*
import react from 'react';
const App = () => {
return (
  <div>
    
  </div>
)
}
export default App;
*/