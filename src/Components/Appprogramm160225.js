
// ===================== Programming =====================

//get data from api
/*
import { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const getuserdata = await fetch('https://jsonplaceholder.typicode.com/posts');
        const userd = await getuserdata.json();
        setData(userd);
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, [])

  return (
    <div>
      <h1>User data</h1>
      <p>{(error) ? error : " "}</p>
      <p>{(loading) ? 'Loading...' : ''}</p>

      <ul>
        {data.map((d, k) => (
          <li key={k}>{d.id}: {d.title}</li>
        ))}
      </ul>

    </div>
  )
}
export default App;
*/


//user data listing with pagination
/*
import { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);
  const itemperpage = 10;
  useEffect(() => {
    const getData = async () => {
      try {
        const getuserdata = await fetch('https://jsonplaceholder.typicode.com/posts');
        const userd = await getuserdata.json();
        setData(userd);
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, [])

  const itemfirstindex = itemperpage*(currentpage-1);
  const itemlastindex = itemfirstindex + itemperpage;
  const totalpage = Math.ceil(data.length/itemperpage);
  //console.log("===>"+itemfirstindex+" , "+itemlastindex+" , "+totalpage);
  const displayitem = data.slice(itemfirstindex,itemlastindex);

  return (
    <div>
      <h1>User data</h1>
      <p>{(error) ? error : " "}</p>
      <p>{(loading) ? 'Loading...' : ''}</p>

      <ul>
        {displayitem.map((d, k) => (
          <li key={k}>{d.id}: {d.title}</li>
        ))}
      </ul>

      <div>
        <button onClick={()=>setCurrentpage(prev=>prev-1)} disabled = {currentpage===1} >Previous Page</button>
        &nbsp;&nbsp;{currentpage}&nbsp;&nbsp;
        <button onClick={()=>setCurrentpage(prev=>prev+1)} disabled = {currentpage===totalpage}>Next Page</button>
      </div>

    </div>
  )
}
export default App;
*/


//Signal program
/*
import { useRef, useState } from 'react';
const App = () => {
  const [color, setColor] = useState("yellow");
  const colorReference = useRef(null);
  // const handlecolor = setInterval(() =>{
  //   let newcolor = "";
  //   // console.log("1=="+color+" , "+newcolor);  
  //   if(color==="yellow"){
  //     newcolor = "red";
  //   }else if(color==="red"){
  //     newcolor = "green";
  //   }else if(color==="green"){
  //     newcolor = "yellow"; 
  //   }
  //   // console.log("2=="+color+" , "+newcolor);
  //   setColor(newcolor);
  // },3000)

  const startsignal = () => {
    colorReference.current = setInterval(() => {
      switch (color) {
        case 'yellow': setColor('red'); break;
        case 'red': setColor('green'); break;
        case 'green': setColor('yellow'); break;
        case 'default': setColor('yellow'); break;
      }
    }, 1000);
  }
  const stopsignal = () => {
    clearInterval(colorReference.current);
  }

  return (
    <div>
      <div style={{ height: "100px", width: "100px", backgroundColor: color, borderRadius: "100px" }}></div>

      <p><button onClick={startsignal}>Start</button></p>
      <p><button onClick={stopsignal}>Stop</button></p>
    </div>
  )
}
export default App;
*/


//Start and stop watch
/*
import react, { useRef, useState } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  const timeref = useRef(null);
  const handlestart = () => {
    timeref.current = setInterval(()=>{
      setTime(prev => prev + 1)}, 1000)
  }
  const handlestop = () => {
    clearInterval(timeref.current);
  }
  return (
    <div>
      <p>time: {time}</p>
      <p>
        <button onClick={handlestart}>Start</button>
      </p>
      <p>
        <button onClick={handlestop}>Stop</button>
      </p>
    </div>
  )
}
export default App;
*/


//Calculator
/*
import react, { useState } from 'react';
const App = () => {
const [input,setInput]=useState('');
const handleinput=(e)=>{
  console.log(e.target);
  setInput(prev=>prev+e.target.id)
}
const handlecal = () =>{
  setInput(eval(input));
}
const handlecancel = () =>{
  setInput('');
}

return (
  <div>
    <h1>Calculate</h1>
    <div>Display: {input}</div>
    <div>
    {[0,1,2,3,4,5,6,7,8,9,10,'*','/','+','-'].map((v,k)=>(
      <button id={v} onClick={handleinput}>{v}</button>
    ))}
    </div>
    <div>
      <button onClick={handlecal}>Calculate</button>
      <button onClick={handlecancel}>Cancel</button>
      </div>
  </div>
)
}
export default App;
*/



//useeffect and debounce example
/*
import { react, useState, useEffect } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [newinput, setNewinput] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setNewinput(input);
    }, 1000);
  }, [input]);

  return (
    <div>
      <h1>Example</h1>
      <p>Input display : {input}</p>
      <input type="text" name="username" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <div>
        <p>Debouce display {newinput}</p>
      </div>
    </div>
  )
}
export default App;
*/



/*
import react, { useState } from 'react';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editid, setEditid] = useState('');
  const [editflag, setEditflage] = useState(false);
  const handleinput = (e) => {
    setInput(e.target.value);
  }
  const handletodos = () => {
    if (input) {
      if (editflag) {
        const [...tmparr] = todos;
        tmparr[editid] = input;
        setTodos(tmparr);
        setEditid('');
        setEditflage(false);
      } else {
        const [...tmparr] = todos;
        tmparr.push(input);
        setTodos(tmparr);
      }
      setInput('');
    }
  }
  const handleedit = (e) => {
    const id = e.target.id;
    const [...tmparr] = todos;
    setInput(tmparr[id]);
    setEditid(id);
    setEditflage(true);
  }
  const handledelete = (e) => {
    const id = e.target.id;
    const [...tmparr] = todos;
    tmparr.splice(id, 1);
    setTodos(tmparr);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Toto </h1>
      <div>
        <input type="text" value={input} onChange={handleinput}></input>
        <button onClick={handletodos}>
          {(editflag) ? 'Update' : 'Add'}
        </button>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {todos.map((e, key) => (
            <li key={key}>{e}
              &nbsp;&nbsp;
              <button id={key} onClick={handleedit}>Edit</button>
              &nbsp;&nbsp;
              <button id={key} onClick={handledelete}>Delete</button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  )
}
export default App;
*/



/*
const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
        const updatedCourses = checked ? [...prevState.courses, value] // Add course if checked
            : prevState.courses.filter((course) => course !== value); // Remove if unchecked
        return { ...prevState, courses: updatedCourses };
    });
};

const handleDegreeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, degrees: selectedOptions });
};
*/

//Form submit with validate
/*
import { react, useState } from 'react';
const App = () => {
    const [isSubmitted,setIsSubmitted]=useState(false);
    const [errors,setErrors] = useState({});
    const [formData,setFormData]=useState({name:'',gender:'',courses:[], degree:'',hobbies:[]})
    const handleinputs=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleinputco=(e)=>{        
        const { value, checked } = e.target;
    setFormData((prevState) => {
        const updatedCourses = checked ? [...prevState.courses, value] // Add course if checked
            : prevState.courses.filter((course) => course !== value); // Remove if unchecked
        return { ...prevState, courses: updatedCourses };
    });
    }
    const handleinputsho=(e)=>{
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({ ...formData, hobbies: selectedOptions });
    }
    
    

    const validate = () =>{
        let tmperror = {};
        if(!formData.name){
            tmperror.name = "Name is req";
        }
        if(!formData.gender){
            tmperror.gender = "gender is req";
        }
        if(formData.courses.length<1){
            tmperror.courses = "courses is req";
        }
        if(!formData.degree){
            tmperror.degree = "degree is req";
        }
        if(formData.hobbies.length<2){
            tmperror.hobbies = "hobbies is req";
        }
        //alert(Object.keys(tmperror).length)
        setErrors(tmperror);
        return Object.keys(tmperror).length;
    }
    const handleform = (e) =>{
        e.preventDefault();
        //alert(validate());
        if(!validate()){
            // console.log("submitted");
            setIsSubmitted(true);
        }

    }
    return (
        <div>
            <h2>Form </h2>
            {(isSubmitted) ? <h2>Submitted</h2> : (
            <form onSubmit={handleform}>
            
            <div>
                <lable>Name:</lable>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleinputs}></input>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <lable>Gender:</lable>
                <input type="radio" name="gender" value="Male" checked={formData.gender==='Male'} onChange={handleinputs} />Male
                <input type="radio" name="gender" value="Female" checked={formData.gender==='Female'} onChange={handleinputs}  />Female
                {errors.gender && <p>{errors.gender}</p>}
            </div>
            <div>
                <lable>Courses:</lable>
                <input type="checkbox" name="courses" value="Math" checked={formData.courses.includes('Math')} onChange={handleinputco} />Math
                <input type="checkbox" name="courses" value="Science" checked={formData.courses.includes('Science')} onChange={handleinputco}  />Science
                <input type="checkbox" name="courses" value="History" checked={formData.courses.includes('History')} onChange={handleinputco}  />History
                {errors.courses && <p>{errors.courses}</p>}
            </div>

            <div>
            <lable>Degree:</lable>
            <select name="degree" value={formData.degree} onChange={handleinputs}>
                <option value="">Select degreee</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="bsc">BSC</option>
            </select>
            {errors.degree && <p>{errors.degree}</p>}
            </div>

            <div>
            <lable>Hobbies:</lable>
            <select name="hobbies" multiple value={formData.hobbies} onChange={handleinputsho}>
                <option value="">Select hobbies</option>
                <option value="play">play</option>
                <option value="music">music</option>
                <option value="dance">dance</option>
            </select>
            {errors.hobbies && <p>{errors.hobbies}</p>}
            </div>

            <div>
                <input type="submit" name="submit" value="Submit"></input>
            </div>
            </form>
            )}
        </div>
    )
}
export default App;

*/



/*
import react from 'react';
const App = () => {
return (
  <div>
    
  </div>
)
}
export default App;
*/