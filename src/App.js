import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';

function App() {
  //set up state for the member form:
  const [user, setUser] = useState([]) // will need to set user state in object form within an array, since it expects an array
  
  // set up state for the member:
  const [member, setMember] = useState({...user});
  console.log('user = ', user, '\nmember = ', member);

  useEffect(
    (e) => {
      setMember({...user[0], [e.target.name]: e.target.value});
    },
    [user]
  )

  return (
    <div className="App">
      <header className="App-header">
        <Form user={user} setUser={setUser} />
        <Members member={member} /> 
        {
          //sets the props to the member after member is made by form
        }
      </header>
    </div>
  );
}

export default App;
