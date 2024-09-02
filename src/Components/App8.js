import React, { useEffect, useLayoutEffect } from 'react'

const App4 = () => {

useEffect(() =>{
console.log("Message from useeffect");
},[])

useLayoutEffect(() =>{
    console.log("Message from useLayouteffect");
},[])

  return (
    <>
    <h2>Test Message</h2>
    { Array(4000).fill('').map((item,index) =>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>
    ))}
    </>
  )
}

export default App4