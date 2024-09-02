import React, { useEffect, useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Pramod");

    // useEffect(()=>{
    //     setTimeout(() =>{
    //         setCount(count +1)
    //     },5000)
    // });

    // useEffect(()=>{
    //     setTimeout(() =>{
    //         setCount(count +1)
    //     },5000)
    // },[]);

    // useEffect(()=>{
    //     setTimeout(() =>{
    //         setCount(count +1)
    //     },5000)
    // },[count]);


    useEffect(()=>{
        setTimeout(() =>{
            setCount(count +1)
        },5000)
    },[count,name]);

  return (
    <>
    <h1>I have rendered {count} and name is {name} times.</h1>
    </>
  )
}

export default App2