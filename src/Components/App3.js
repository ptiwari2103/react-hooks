import React, { useEffect, useRef, useState } from 'react'

const App3 = () => {
    /*
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(prev => prev + 1);
    });

    return (
        <>
            <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
            <h1>Count render {count}</h1>
        </>
    )
    */


    /*
    const [value, setValue] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
            <h1>Count render {count.current}</h1>
        </>
    )
    */



    
    const inputElem = useRef();
    const btnClicked = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = "blue";
    }

    return (
        <>
            <input type="text" ref={inputElem}/>
            <button onClick={btnClicked}>Click me</button>
        </>
    )


}

export default App3