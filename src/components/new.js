import React from 'react'

function UserList({userslist}) {
  return (
    <div>
        {userslist.length}
        {
            userslist.map((user, key) => (
                
                <h4 key={key} style={{color: 'red'}}>{user}</h4>
            ))
        }
    </div>
  )
}

UserList.proptype

export default UserList