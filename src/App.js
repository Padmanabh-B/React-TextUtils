import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState("light"); //Weather dark mode is enable or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4d4d3d';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }

  return (
    <>

      <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={ mode } />
      </div>
    </>
  );
}

export default App;
