import React, { Component } from 'react'

export default class SyntheticEventClass extends Component {

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

  
    render() {
        return (
            <>
                <div>syntheticEventClass</div>
            </>
        )
    }
}
