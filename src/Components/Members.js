import React from 'react';

const Members = (props) => {
    console.log('props to Members before destructuring: ', props)
    const {members, memberList} = props;
    console.log(memberList)
    memberList.push(...members)
    console.log('props to Members: ', props)
    console.log('"members" in Members: \n', members)
    
    return (
        <div className='member-container App-header'>
            {
              memberList.map(member => (
              <div key={`memberdiv${Date.now()}`}>
                  <h3 className="member-name" key={`name${Date.now()}`}>{member.name}</h3>
                  <p className="member-email" key={`email${Date.now()}`}>{member.email}</p>
              </div>
        )
      )
    }
    </div>
  )
}
export default Members