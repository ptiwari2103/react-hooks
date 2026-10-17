//6= forwardRef example
/*
import react, { forwardRef } from 'react';
import { useRef } from 'react';
const Childbutton = forwardRef((props, ref) => {
  return (
    <button ref={ref}>{props.children}</button>
  )
});

const App = () => {
  const forwardrefobj = useRef(null);
  const handlechildbtn = () => {
    forwardrefobj.current.style.border = "2px solid red";
  }
  return (
    <div>
      <h1>Forward ref example</h1>
      <Childbutton ref={forwardrefobj}>Child Button</Childbutton>
      <p></p>
      <button onClick={handlechildbtn}>Click to change child button border</button>
    </div>
  )
}
export default App;
*/



//5- useRef example
/*
import react from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const inputref = useRef(null);
  const randonref = useRef(0);
  const handleref = () => {
    inputref.current.focus();
  }
  useEffect(() => {
    randonref.current = randonref.current + 1;
    console.log("====" + randonref.current);
  });

  return (
    <div>
      <h1>React hook example</h1>
      <input type="text" name="name" value={input} ref={inputref} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleref}>Click to focus</button>
      <h2>{input}</h2>
      <h2>randonref : {randonref.current}</h2>
    </div>
  )
}
export default App;
*/


//4. Form submit with name and gender
/*
import react from 'react';
import { useState } from 'react';
const App = () => {
  const [formData, setFormData] = useState({ name: '', gender: '' });
  const [errors, setErrors] = useState({});
  const handleinput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const formerror = {};
    if (!formData.name) {
      { formerror.name = "Name is required" };
    }
    if (!formData.gender) {
      { formerror.gender = "Gender is required" };
    }
    console.log(formerror);
    setErrors(formerror);
    const errorlength = Object.keys(formerror).length;
    if (errorlength == 0) {
      alert('Form submit');
    }
  }
  return (
    <div style={{ textAlign: 'center', padding: '10px', margin: '10px' }}>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleinput}></input>
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" id="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleinput} />Male
          <input type="radio" name="gender" id="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleinput} />Female
          {errors.gender && <p>{errors.gender}</p>}
        </div>

        <div>
          <button name="submit" value="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default App;
*/



//3- Create one component display count and it increment button should it child component 
/*
import react from 'react';
import { useState } from 'react';
const Childapp = (props) => {
  return (
    <div>
      <h2>{props.message}</h2>
      <button onClick={props.incrementbtm}>Increment2</button>
    </div>
  )
}
const App = () => {
  const [count, setCount] = useState(0);
  const handlecount = () => {
    setCount(prev => prev + 1);
  }
  const msg = "You can increment";
  return (
    <div>
      <h2>Count: {count}</h2>
      <Childapp incrementbtm={handlecount} message={msg}></Childapp>
    </div>
  );
}
export default App;
*/


//2- Todo list with edit and delete
/*
import react from 'react';
import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [eid, setEid] = useState('');
  const [editflage, setEditflage] = useState(false);
  const handleupdate = () => {    
    if (editflage) {
      let todolist = [...todos];
      if (input !== "") {
        todolist[eid] = input;
        setTodos(todolist);
        setEid('');
        setEditflage(false);
        setInput('');
      }
    } else {
      if (input !== "") {
        setTodos([...todos, input]);
        setInput('');
      }
    }
  }

  const handleedit = (index) => {
    let todolist = [...todos];
    if (todolist[index]) {
      setInput(todolist[index]);
      setEid(index);
      setEditflage(true);
    }    
  }

  const handledelete = (index) => {
    let todolist = [...todos];
    todolist.splice(index, 1);
    setTodos(todolist);
  }
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <h2>Todo List</h2>
      <div>
        <input value={input} onChange={(event) => setInput(event.target.value)}></input>&nbsp;&nbsp;
        <button onClick={() => handleupdate()}>
          {(editflage) ? 'Update' : 'Add'}
        </button>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}
              &nbsp;<button onClick={() => handleedit(index)}>Edit</button>
              &nbsp;<button onClick={() => handledelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
*/

//1- Calculator
/*
import react, { useState } from 'react';
const App = () => {
const [input,setInput] =useState('');
const handleinput = (e) =>{
  setInput(prev => prev + e)
}
const handleresult = () =>{
  setInput(eval(input));
}
const handlereset = () =>{
  setInput('');
}
return (
  <div>
    <h2>Calculator</h2>
    <div>Display:{input}</div>
    <div>
      {[0,1,2,3,4,5,6,7,8,9,'+','-','*','/'].map((e)=>(
        <button key={e} onClick={()=>handleinput(e)}>{e}</button>
      ))}
    </div>
    <div>
      <button onClick={()=>handleresult()}>Result</button>
      <button onClick={()=>handlereset()}>Reset</button>
    </div>

  </div>
)

}
export default App;
*/