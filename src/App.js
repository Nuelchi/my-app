// import logo from './logo.svg';
import './App.css';


import MovieCard from './card.jsx';

import { useEffect, useState } from 'react';

// function App() {
//   const IsRunning = true;

  
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>Welcome to My React App</h1>

//       {IsRunning ? (
//         <> you run so fast </> ) 
//       : (
//         <h2>App is not running</h2>
//       )}
//       <p>This is a simple React application.</p>


//     </div>
//   );
// }
// const Person = (props) => {
//   return (
//     <>
//     <h1>name: {props.name}</h1>
//     <h2>age: {props.age}</h2>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Welcome to My React App</h1>
//       <p>This is a simple React application.</p>
//       <Person name='john' age={20}/>
//       <Person name='doe' age={30}/>
//       <Person name='jane' age={25}/>
//       <Person name='smith' age={40}/>
//     </div>
//   );
// }
// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect (() => {
//     setCount(10);
//     }, []);

//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       <button onClick={ ()=> setCount((prevCount) => prevCount + 1)}>+</button>
//       <h1>{count}</h1>
//       <button onClick={ ()=> setCount((prevCount) => prevCount - 1)}>-</button>
//     </div>
//   );
// }

//dd0a8f0d

const API_URL = 'https://www.omdbapi.com/?apikey=dd0a8f0d'


const App = () => {
const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (Title) => {
    const response = await fetch(`${API_URL}&s=${Title}`);
    const data = await response.json();
    console.log(data.Search);
     if (data.Search) {
    setMovies(data.Search);  // <-- this line is missing in your current code
  }
  };


  useEffect(() => { 
    searchMovies('Batman');
  }, []);


  return (
    <div className="app">
      <h1>MovieEmpire</h1>
      <div className="search">
        <input value={searchTerm} placeholder='Search for movies' 
          onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={() => searchMovies(searchTerm)}>
  Search
</button>
      </div>
            {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )};


export default App;
