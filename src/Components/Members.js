import React from 'react';

const Members = (props) => {
    const {member} = props;
    
    return (
        <div>        {
            member.map(member => (
            <div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-email">{member.email}</p>
                <p className="member-role">{member.role}</p>
            </div>
        )
      )
    }
    </div>
  )
}
export default Members