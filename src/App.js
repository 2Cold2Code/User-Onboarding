import React, { useState, useEffect } from 'react';
import {Route, useHistory} from 'react-router-dom';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';
import * as Yup from 'yup';

function App() {

  const baseStateObj = { // set the base properties for state to be reused
    name: '',
    email: '',
    password: '',
    terms: false
  }
  //set up state for the member form:
  const [user, setUser] = useState(baseStateObj) // will need to set user state in object form within an array, since it expects an array
  
  // set up state for the member display:
  const [members, setMembers] = useState([baseStateObj]);

  const memberList = []; // set up an array to hold members after validation.
  console.log('user = ', user, '\nmember = ', members);

  useEffect(
    (e) => {
      setMembers({...user, [user.name]: user.value});
      console.log('!i \nuser: ', user, '\nmembers: ', members, '\n\ni!')
    },
    [user]
  )

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/'>
          <Form 
          user={user} 
          setUser={setUser} 
          members={members} 
          setMembers={setMembers} 
          memberList={memberList}/>
        </Route>
        {
          //sets the props to the member after member is made by form
        }
      </header>
      <Route path='/members'>
        <Members 
        members={[members]} 
        baseStateObj={baseStateObj}
        memberList={memberList}/>
      </Route>
    </div>
  );
}

export default App;
