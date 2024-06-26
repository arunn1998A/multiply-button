import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);

  const multiplyByFive = () => {
    setNumber(number * 5);
  };

  return (
    <div >
      <h1 className='st'  >{number}</h1>
      <button  className="str" onClick={multiplyByFive}>Increment</button>
    </div>
  );
}

export default App;
