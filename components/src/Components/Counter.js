import React, { Component } from 'react'

class Message extends Component {
    // rconst
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    
    increment(){
        // We use the previous State of the component, so we can update it's value to a new one
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Message