import React from 'react';
import {useHistory} from 'react-router-dom';

const Members = (props) => {

  const {push} = useHistory();
  const newMember = () => {
    push('/')
  }
    console.log('props to Members before destructuring: ', props)
    const {members, memberList} = props;
    console.log(memberList)
    memberList.push(...members)
    console.log('props to Members: ', props)
    console.log('"members" in Members: \n', members)
    
    return (
      <div className='member-wrapper App-header'>
        <button onSubmit={() => newMember()} >New Member</button>
        <section className='member-container'>
            {
              memberList.map(member => (
              <div key={`memberdiv${Date.now()}`}>
                  <h3 className="member-name" key={`name${Date.now()}`}>{member.name}</h3>
                  <p className="member-email" key={`email${Date.now()}`}>{member.email}</p>
              </div>
        )
      )
    }
    </section>
    </div>
  )
}
export default Members