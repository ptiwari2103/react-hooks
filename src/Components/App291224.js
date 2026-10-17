
/*
Custom hook
import react, { useState } from 'react';

const useCount = (initialval=0) => {
  const [count,setCount] = useState(initialval);
  const handlein = () => {setCount(prev => prev +1)}
  const handlede = () => {setCount(prev => prev - 1)}
  const handlereset = () => {setCount(initialval)}
  return {count,handlein,handlede,handlereset};  
}

const App = () => {
  const {count,handlein,handlede,handlereset} = useCount(5);
  return (
    <div>
      <h1>Custom hooks</h1>
      <h1>Count : {count}</h1>
      <p><button onClick={handlein}>Increment</button></p>
      <p><button onClick={handlede}>Decrement</button></p>
      <p><button onClick={handlereset}>Reset</button></p>
    </div>
  )
}
export default App;
*/


/*
Calculator
import react, { useState } from 'react';
const App = () => {
  const [input,setInput] = useState('');
  return (
    <div>
      <h1>Calculator</h1>
      <h1>Display : {input}</h1>
      <div>
        {[0,1,2,3,4,5,6,7,8,9,'+','-','*','/'].map((value,index)=>(
          <button key={index} onClick={()=>setInput(previnput=>previnput+value.toString())}>{value}</button>
        ))}
      </div>
      
      <div>
      <button onClick={()=>setInput(eval(input))}>Calculate</button>
      <button onClick={()=>setInput('')}>Reset</button>
      </div>
    </div>
  )
}
export default App;
*/


/*
//Child Component
import react, { useState } from 'react';

const Childcom = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>
        {props.mobile}
      </p>
      <p>
        <button onClick={props.increment}>Increment</button>
      </p>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>

      <p>
        <button onClick={() => { setCount(prev => prev - 1) }}>Decrement</button>
      </p>
      <p>
        <button onClick={() => { setCount(0) }}>Reset</button>
      </p>
      <Childcom mobile={'3434343'} increment={() => { setCount(prev => prev + 1) }} />
    </div>
  )
}
export default App;
*/


/*
//useRef example
import react, { useRef, useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const inputref= useRef('');
  return (
    <div>
      <input type="text" name="myname" ref={inputref} value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <p><button>Test</button></p>
      <p><button onClick={()=>inputref.current.focus()}>Focus ref</button></p>
    </div>
  )
}
export default App;
*/


/*
//Forward ref
import react, { forwardRef, useRef } from 'react';

const Childcom = forwardRef((props, ref) => {
  return (
    <div>
      <button ref={ref}>{props.btnname}</button>
    </div>
  )
});

const App = () => {
  const childref = useRef(null);

  const handlerefbtn = () => {
    childref.current.style.border = "2px solid red";
  };
  return (
    <div>
      <h1>Forward ref example</h1>
      <Childcom btnname={'Child button'} ref={childref}></Childcom>
      <button onClick={handlerefbtn}>Update child button</button>
    </div>
  )
};
export default App;
*/

/*
//Todo list
import react from 'react';
import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editid, setEditid] = useState('');
  const [edit, setEdit] = useState(false);
  const handleinput = () => {
    if (edit === true) {
      let todos_data = [...todos];
      todos_data[editid] = input;
      setTodos(todos_data);
      setEdit(false);
      setEditid('');
    } else {
      setTodos(prev => [...prev, input]);
    }
    setInput('');
  }

  const handleedit = (index) => {
    console.log("====" + index);
    let todos_data = [...todos];
    setInput(todos_data[index]);
    setEdit(true);
    setEditid(index);
  }

  const handledelete = (index) => {
    let todos_data = [...todos];
    todos_data.splice(index, 1);
    setTodos(todos_data);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo </h1>
      <input type="text" name="add_todo" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleinput}>{(edit === true) ? 'Edit' : 'Add'}</button>
      <p></p>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((val, index) => (
          <li key={index}>{val} &nbsp;&nbsp;
            <button onClick={() => handleedit(index)}>Edit</button>
            &nbsp;&nbsp;
            <button onClick={() => handledelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App;
*/

/*
//Form validate and submit
import react from 'react';
import { useState } from 'react';
const App = () => {
  const [formdata, setFormdata] = useState({ name: "", gender: "" });
  const [errors, setErrors] = useState({});

  const handleinput = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    const formerror = {};
    if (!formdata.name) {
      formerror.name = 'Name is required';
    }
    if (!formdata.gender) {
      formerror.gender = 'Gender is required';
    }
    setErrors(formerror);
    const totalerror = Object.keys(formerror).length;
    if (totalerror === 0) {
      alert("Submitted");
    }

  }

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <h1>Add Form</h1>
        <div>
          <label>Name</label>
          <input type="text" name="name" id="name" value={formdata.name} onChange={handleinput}></input>
          <span>{(errors.name) ? errors.name : ''}</span>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" id="gender" checked={formdata.gender === 'male'} value="male" onChange={handleinput} />Male
          <input type="radio" name="gender" id="gender" checked={formdata.gender === 'female'} value="female" onChange={handleinput} />Female
          <span>{(errors.gender) ? errors.gender : ''}</span>
        </div>

        <div>
          <button type="Submit" value="submit">Submit</button>
        </div>

      </div>
    </form>
  )
}
export default App;
*/


