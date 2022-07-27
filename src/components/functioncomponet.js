import React, { useState } from 'react'
import HOCComponent from './hoc';
import UserList from './new';

function FunctionComponet() {

  const [users, setUsers] = useState(['john', 'doe', 'johney', 'lkajdf', 'alsdjfa'])
  return (
    <>
      <UserList userslist={{}} />
    </>

  )
}

export default HOCComponent(FunctionComponet)