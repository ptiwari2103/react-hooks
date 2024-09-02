import { useState } from "react";
/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
*/


/*
export default function App() {
  return (
    <div>
      <h1>Count the update seperatly</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count +1);
  }

  return (
    <button onClick={handleClick}>Click {count} times</button>
  )
}
*/


/*
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count the update seperatly</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({count,onClick}) {
  return (
    <button onClick={onClick}>Click {count} times</button>
  );
}
*/


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

