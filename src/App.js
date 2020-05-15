import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  //set up state for the member form:
  const [user, serUser] = useState([])
  

  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Members member={member} /> 
        {
          //sets the props to the member after member is made by form
        }
      </header>
    </div>
  );
}

export default App;
