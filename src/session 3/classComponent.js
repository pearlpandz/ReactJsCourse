import React, { Component, Fragment } from 'react'
import HOCComponent from './hoc'

class ClassComponent extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false, // default value
            users: [],
           
        }
    }

    render() {
        const { isLoggedIn, users } = this.state;
        return (
            <>
                
                {isLoggedIn ? 'Logged In' : 'Logout'}
                <br/>
                <button onClick={() => this.setState({ isLoggedIn: true })}>Logged In</button>
                <button onClick={() => this.setState({ isLoggedIn: false })}>Logged Out</button>
                <br/><br/><br/><br/><br/>
                <input type="text" onBlur={(event) => { 
                    let _users = [event.target.value]
                    this.setState({
                        users: [...users, ..._users]
                    })
                    console.log(users)
                }} />


            </>
        )
    }
}

export default HOCComponent(ClassComponent)
