/*
import {useState} from 'react';
import Header from './Header';

function App() {
const [count, setCount] = useState(0);
  return (
    <>
    <Header/>
    <h1>{count}</h1>
    <button onClick={() => setCount(prev => prev +1)}>Click me</button>
    </>
  )
}

export default App;
*/

/*
import {useState} from 'react';
import Header from './Header';

function App() {
const [count, setCount] = useState(0);
const newFn = () => {}
  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={() => setCount(prev => prev +1)}>Click me</button>
    </>
  )
}

export default App;
*/

import {useCallback, useState} from 'react';
import Header from './Header';

function App() {
const [count, setCount] = useState(0);
const newFn = useCallback(() => {},[])
  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={() => setCount(prev => prev +1)}>Click me</button>
    </>
  )
}

export default App;