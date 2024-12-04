//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/About";
import Counter from "./pages/Counter";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"  
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className='App'>
      <nav>
        <Link to="/">home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div> 
  );
}

export default App;
