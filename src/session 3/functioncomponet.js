import React, { useState } from 'react'
import HOCComponent from './hoc';
import UserList from './new';


const userlist = [{
  name: 'john',
  profilepic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
}, {
  name: 'john',
  profilepic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
}, {
  name: 'Juan',
  profilepic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
}, {
  name: 'Jack',
  profilepic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
}]

function FunctionComponet() {

  const [users, setUsers] = useState(userlist)
  return (
    <>
      <UserList userslist={users} />
    </>

  )
}

export default HOCComponent(FunctionComponet)