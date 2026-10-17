/*
import react, { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState([]);
  const [error,setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getdata = async () => {
      try {
        const getresult = await fetch('https://jsonplaceholder.typicode.com/posts');
        const udata = await getresult.json();
        setData(udata);
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false);
      }
    }
    getdata();
  }, [])

  return (
    <div>
      <h1>Userdata</h1>
      <div>{(loading)? 'Loading...' : ''}</div>
      <div>
        {(error)? error : ''}
      </div>
      <ul>
        {data.map((e, k) => (
          <li key={k}>{e.id} : {e.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;
*/


//Api listing with pagination
/*
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const getdata = async () => {
      try {
        const getresult = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const udata = await getresult.json();
        setData(udata);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    getdata();
  }, []);

  // Get total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>User Data</h1>

      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      
      <ul>
        {currentData.map((e) => (
          <li key={e.id}>
            {e.id}: {e.title}
          </li>
        ))}
      </ul>

      
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ⬅️ Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default App;
*/


//Unregistered //38000 per sq meeter = 29 32 33 34   (TOI) (7% semicommericial )

//Regstered //65000 per sq meeter = 18 20 22 E


