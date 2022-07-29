import React from 'react'

function UserList({ userslist }) {
  return (
    <div>
      {
        userslist.map((user, index) => (
          <div className='user' key={index} >
            <img width={100} height={100} src={user.profilepic} />
            <h4 style={{ color: 'red' }}>{user.name}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default UserList