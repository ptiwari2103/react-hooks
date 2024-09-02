import React, { useEffect, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const App9 = () => {
    // const [name, setName] = useState(
    //     localStorage.getItem('username') ? localStorage.getItem('username') : ''
    // );

    // useEffect(() => {
    //     localStorage.setItem('username', name)
    // }, [name])

    const [name, setName] = useLocalStorage('username','')


    return (
        <>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Hello, {name}! </h2>
        </>
    )
}

export default App9