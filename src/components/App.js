
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input,setInput] = useState('');
  return (
    <div>
     <label>Enter your name:</label><br/>
       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

       <p>Hello, {input}!</p>
    </div>
  )
}

export default App
