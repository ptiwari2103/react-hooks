
//============= useState ===========
/*
import { react, useState } from 'react';
const App = () => {
    const [color, setColor] = useState('Red');
    const changeColor = () => {
        setColor('Blue');
    }

    return (
        <div>
            <h2>My favourite color is : {color}</h2>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
export default App;
*/

/*
import { react, useState } from 'react';
const App = () => {
    const [car, setCar] = useState({brand:"Tata",model:"2024",color:"Red"});
    const changeColor = () => {
        // setCar((prev)=>({...prev, color:'blue'}))
        setCar({...car, color:'blue'})
    }
    return (
        <div>
            <h2>My favourite car is : {car.brand}, {car.model}, {car.color}</h2>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
export default App;
*/

//Automatic batch example
//Automatic batch example with not working since count1 repeating same
/*
import {react, useState} from 'react';
const App = () => {
    const [count1,setCount1] = useState(0);    
    const handlebatch = () =>{
        setCount1(count1 + 1);
        setCount1(count1 + 1);  
        setCount1(count1 + 1);        
    }
    return(
        <div>
            <h2>Count 1 = {count1}</h2>           

            <button onClick={handlebatch}>Automatic Batch</button>            
        </div>
    )
}
export default App;
*/


/*
import {react, useState} from 'react';
const App = () => {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);
    const handlebatch = () =>{
        setCount1((prev)=>(prev + 1));
        setCount2((prev)=>(prev + 1));
        setCount3((prev)=>(prev + 1));
    }
    return(
        <div>
            <h2>Count 1 = {count1}</h2>
            <h2>Count 2 = {count2}</h2>
            <h2>Count 3 = {count3}</h2>

            <button onClick={handlebatch}>Automatic Batch</button>            
        </div>
    )
}
export default App;
*/

/*
import {react, useState} from 'react';
const App = () => {
    const [count1,setCount1] = useState(0);    
    const handlebatch = () =>{
        setCount1((prev)=>(prev + 1));
        setCount1((prev)=>(prev + 1));  
        setCount1((prev)=>(prev + 1));        
    }
    return(
        <div>
            <h2>Count 1 = {count1}</h2>           

            <button onClick={handlebatch}>Automatic Batch</button>            
        </div>
    )
}
export default App;
*/


//============= useEffect ===========
/*
import { react, useEffect, useState } from 'react';
const App = () => {
const [count,setCount]=useState(0);
const [num,setNum]=useState(100);

const handlestate = () =>{
    setCount((prev) => prev +1);
}

useEffect(()=>{
    setNum((prev) => prev +1);
},[count])

return(
    <div>
        <h2>My use effect count = {num}</h2>
        <h2>My use state count = {count}</h2>
        <button onClick={handlestate}>Click to update</button>
    </div>
)
}
export default App;
*/



//============= useRef ===========
/*
import {react, useState, useEffect, useRef} from 'react';
const  App = () =>{
const [count,setCount] = useState(0);
const [num,setNum] = useState(10);
const refnum = useRef(20);
useEffect(()=>{
    setNum(prev => prev+1)
    refnum.current = refnum.current +1;
},[count]);
return(
    <div>
        <h2>Num = {num}</h2>
        <h2>refNum = {refnum.current}</h2>
        <div>
            <button onClick={() =>setCount(prev=>prev+1)}>Increment</button>
            <h2>{count}</h2>
            <button onClick={() =>setCount(prev=>prev-1)}>Decriment</button>
        </div>
    </div>
)
}
export default App;
*/

/*
import React, { useRef, useState, useEffect } from 'react';
const App = () => {
    // useRef to reference the input field and render count
    const inputRef = useRef(null);
    const renderCount = useRef(0);

    // State to control the input value
    const [inputValue, setInputValue] = useState('');

    // useEffect to track component renders
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    // Function to focus the input field
    const focusInput = () => {
        inputRef.current.focus(); // Focus on the input element using useRef
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>React useRef Example</h2>
            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                style={{ padding: '10px', margin: '10px' }}
            />
            <br />
            <button onClick={focusInput} style={{ padding: '10px' }}>Focus the Input Field</button>
            <br />
            <p>Input Value: {inputValue}</p>
            <p>This component has rendered {renderCount.current} times.</p>
        </div>
    );
};
export default App;
*/


/*
import React, { forwardRef, useRef } from 'react';

// Step 1: Create a child component that uses forwardRef
const CustomButton = forwardRef((props, ref) => (
    <button ref={ref} className="custom-button">
       p {props.children}
    </button>
));

// Step 2: Create a parent component to use the forwarded ref
const App = () => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (buttonRef.current) {
            buttonRef.current.focus();  // Programmatically focus on the button
            // buttonRef.current.style=border:"2px";
        }
    };

    return (
        <div>
            <CustomButton ref={buttonRef}>Click Me</CustomButton>
            <button onClick={handleClick}>Focus the custom button</button>
        </div>
    );
};

export default App;
*/



//============= useMemo ===========
//Below cubenumber is rendering every render
/*
import { useState } from 'react';
import { react } from 'react';
const App = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    const handlenumber = () => {
        setNumber((prev) => prev + 1)
    }
    const handlecount = () => {
        setCount((prev) => prev + 1)
    }
    const cubenumber = () => {
        console.log("Cube the number " + number);
        return Math.pow(number, 3);
    }
    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={handlenumber}>Increment Number</button>
            <h2>Cube Number : {cubenumber()}</h2>
            <h2>Count: {count}</h2>
            <button onClick={handlecount}>Increment Count</button>
        </div>
    )
}
export default App;
*/

//Reslove cubenumber rendering in every render
/*
import {react,useMemo,useState} from 'react'
const App = () => {
const [number,setNumber]=useState(0);
const [count,setCount]=useState(0);
const handlenumber = () =>{
    setNumber(prev => prev +1)
}
const cube =(number)=>{
    console.log("Calculate cube");
    return Math.pow(number, 3);
}

const handlecount = () => {
    setCount(prev => prev +1)
}
const cuberesult = useMemo(()=>cube(number),[number])
return (
    <div>
        <h2>Number : {number}</h2>
        <button onClick={handlenumber}>Update Number</button>
        <h2>Number Cube : {cuberesult} </h2>
        <h2>count : {count}</h2>
        <button onClick={handlecount}>Update Count</button>
    </div>
)
}
export default App;
*/




//============= useCallback ===========
//https://www.youtube.com/watch?v=6wf5dIrryoQ
/*
import { useState } from 'react';
import { react } from 'react';
const Header = () => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{textAlign:"center"}}>
            <Header></Header>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount((pre) => pre + 1)}>Increase Count</button>
        </div>
    )
}
export default App;
*/

/*
import React, { useState } from 'react';
const Header = React.memo(() => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
});
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{textAlign:"center"}}>
            <Header></Header>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount((pre) => pre + 1)}>Increase Count</button>
        </div>
    )
}
export default App;
*/

/*
import React, { useState } from 'react';
const Header = React.memo(() => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
});
const App = () => {
    const [count, setCount] = useState(0);
    const newFn = () =>{}
    return (
        <div style={{textAlign:"center"}}>
            <Header newFn={newFn}></Header>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount((pre) => pre + 1)}>Increase Count</button>
        </div>
    )
}
export default App;
*/

/*
import React, { useCallback, useState } from 'react';
const Header = React.memo(() => {
    console.log("Header rendered");
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
});
const App = () => {
    const [count, setCount] = useState(0);
    const newFn = useCallback(() =>{},[]);
    return (
        <div style={{textAlign:"center"}}>
            <Header newFn={newFn}></Header>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount((pre) => pre + 1)}>Increase Count</button>
        </div>
    )
}
export default App;
*/



/*
import React, { useState, useCallback } from 'react';

// Child Component
const ShowCount = React.memo(({ count, title, handleClick }) => {
  console.log(`Rendering ${title}`);

  return (
    <div>
      <h2>{title}: {count}</h2>
      <button onClick={handleClick}>Increment {title}</button>
    </div>
  );
});

const App = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // Using useCallback to memoize the functions
  const incrementCountOne = useCallback(() => {
    setCountOne((prev) => prev + 1);
  }, []);

  const incrementCountTwo = useCallback(() => {
    setCountTwo((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>useCallback Hook Example</h1>
      // Passing memoized functions to prevent unnecessary re-renders
      <ShowCount count={countOne} title="Counter One" handleClick={incrementCountOne} />
      <ShowCount count={countTwo} title="Counter Two" handleClick={incrementCountTwo} />
    </div>
  );
};
export default App;
*/


//============= useContext ===========
/*
import { createContext, useContext, useState } from 'react'
import {react} from 'react'
const UserData = createContext();

const UserProvider = ({children}) =>{
    const [user,setUser] = useState({name:"Pramod",mob:"4444"})
    const updateProfile = (newUser) =>{
        setUser(newUser);
    }
    return (
    <UserData.Provider value={{user,updateProfile}}>
        {children}
    </UserData.Provider>
    )
}

const UserProfile = () =>{
    const {user} = useContext(UserData);
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Mob: {user.mob}</h2>
        </div>
    )
}

const ChangeProfile = () =>{
    const {updateProfile} = useContext(UserData)
    const changeProfile = () =>{
        updateProfile({name:"PramodTiwari",mob:"2222"})
    }
    return (
        <button onClick={changeProfile}>Change Profile</button>
    )
}

const ProfileSummary = () =>{
    return(
        <h2>This is useContext example</h2>
    )
}

const App = () => {
    return (
        <UserProvider>
            <UserProfile></UserProfile>
            <ChangeProfile></ChangeProfile>
            <ProfileSummary></ProfileSummary>
        </UserProvider>
    )
}

export default App;
*/


/*
import {createContext, react, useContext, useState} from 'react'
const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [light,setLight]=useState('light');
    const togglelight =()=>{
        setLight((light==='light')?'dark':'light')
    }
    return(
        <ThemeContext.Provider value={{light,togglelight}}>
            {children}
        </ThemeContext.Provider>
    )
}
const ThemeToggle = () =>{
    const {light,togglelight} = useContext(ThemeContext);
    const changelight = () =>{
        togglelight()
    }
    return(
        <>
        <h2>Light:{light}</h2>
        <button onClick={changelight}>Toggle</button>
        </>
    )
}
const App = () => {
    return (
        <ThemeProvider>
            <ThemeToggle></ThemeToggle>
        </ThemeProvider>
    )
}
export default App;
*/


//============= useReducer ===========
/*
import { react, useReducer } from 'react'
const App = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'in':
                return { count: state.count + 1 }
            case 'de':
                return { count: state.count - 1 }
            case 're':
                return { count: 0 }
            default:
                return state;
        }
    }
    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, intialState);
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'in' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'de' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type:  're' })}>RESET</button>
        </div>
    )
}
export default App;
*/

/*
import React, { useReducer, useState } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};
const App = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setNewTodo('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default App;
*/


//============= useLayoutEffect ===========
/*
import React, { useEffect, useLayoutEffect } from 'react'
const App = () => {
useEffect(() =>{
console.log("Message from useeffect");
},[])

useLayoutEffect(() =>{
    console.log("Message from useLayouteffect");
},[])

  return (
    <>
    <h2>Test Message</h2>
    { Array(4).fill('').map((item,index) =>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>
    ))}
    </>
  )
}
export default App
*/


//============= customhook ===========
/*
import { react, useEffect, useState } from 'react'
const MyCustom = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        localStorage.setItem('username', name);
    }, [name])
    return (
        [name, setName]
    )
}
const App = () => {
    // const [name,setName] = useState('');

    // useEffect(() => {
    //   localStorage.setItem('username',name);
    // }, [name])

    const [name,setName] = MyCustom();
    return (
        <>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
            <h2>Hello, {name}</h2>
            <h2>Storage, {(localStorage.getItem('username')) ? localStorage.getItem('username') : ''}</h2>
        </>
    )
}
export default App;
*/



/*
Finish the FocusableInput component so that the input Element
automatically receives focus on the first render if the should Focus 
prop is true.

import React from 'react';
import { createRoot} from 'react-dom/client';

const FocusakeInput = (props) => {
    //Write your code here
    return <input />;
}
document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML),3000);




import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const FocusableInput = (props) => {
  const inputRef = useRef(null); // Create a reference to the input element

  useEffect(() => {
    if (props.shouldFocus && inputRef.current) {
      inputRef.current.focus(); // Focus the input element if shouldFocus is true
    }
  }, [props.shouldFocus]); // Dependency array ensures this effect runs only on first render or if shouldFocus changes

  return <input ref={inputRef} />; // Attach the ref to the input element
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 3000);

*/


/*
The Message component contains on anchor element and a 
paragraph below the anchor. Rendering of the paragraph should be 
toggled by clicking on the anchor element using the following logic:

1- At the start the paragraph should not be rendered. 
2- After a click the paragraph should be rendered. 
3- After another click the paragraph should not be rendered. 

Finish the Message component by implementing this logic.


import React from 'react';
import { createRoot } from 'react-dom/client';

const Message = () => {  
  return (
    <React.Fragment>
      <a href="#">Want to buy a new car?</a>
      <p>Call +11 22 33 44 now!</p>
    </React.Fragment>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<Message />);
const rootElement = document.getElementById("root");
setTimeout(() => {
  console.log("Before click: " + rootElement.innerHTML);

  document.querySelector("a").click();
  setTimeout(() => {
    console.log("After click: " + rootElement.innerHTML);
  });
});

*/



/*
import React, { useState, useRef } from 'react';

const App = () => {
  const [time, setTime] = useState(0); // State to track elapsed time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // State to track if the stopwatch is running
  const intervalRef = useRef(null); // Ref to store the interval ID

  const startHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update every second
    }
  };

  const stopHandler = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  // Formatting the time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startHandler} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopHandler} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default App;


*/