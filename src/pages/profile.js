import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile(props) {

    const location = useLocation();
    const _location = location.search.replace('?',"");
    const __location = _location.split('&');
    const user = {};
    __location.forEach(element => {
        const new_element = element.split('=')
        user[new_element[0]] = new_element[1]
    });
    console.log(user)

    return (
        <div>
            Profile page for {user.email}
        </div>
    )
}

export default Profile