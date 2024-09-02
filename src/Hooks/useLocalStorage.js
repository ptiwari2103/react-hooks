import React, { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [name, setName] = useState(
        localStorage.getItem('username') ? localStorage.getItem('username') : ''
    );

    useEffect(() => {
        localStorage.setItem('username', name)
    }, [name])

    return [name, setName]
}

export default useLocalStorage
