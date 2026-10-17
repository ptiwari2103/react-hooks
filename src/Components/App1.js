/*
//useRef example
import {useRef, useState} from 'react';
const App = () => {
    const [input,setInput] = useState("");    
    const inputref = useRef();
    return(
        <div>
          <p>Input = {input}</p>
           <input type="text" ref={inputref} value={input} onChange={(e)=>setInput(e.target.value)} ></input>
           <button onClick={()=>inputref.current.focus()}>Focus</button>        
        </div>
    )
}
export default App;
*/
