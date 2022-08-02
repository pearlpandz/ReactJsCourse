
import React from 'react'
import Profile from './profile'

import { useNavigate } from 'react-router-dom'

import './user.css'

function Users() {
    const navigate = useNavigate();


    const USERS = [{
        name: 'john',
        email: 'john@mail.com'
    }, {
        name: 'juan',
        email: 'juan@mail.com'
    }, {
        name: 'jack',
        email: 'jack@mail.com'
    }, {
        name: 'pearl',
        email: 'pearl@mail.com'
    }, {
        name: 'laksha',
        email: 'laksh@mail.com'
    }]

  return (
    <div className='user-list'>
        {
            USERS.map((user, index) => (
                <div key={index} className='user' onClick={() => navigate(`/profile/${user.name}`)}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Users