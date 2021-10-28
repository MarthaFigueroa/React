import React, { Component } from "react";

class EventBind extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            message: "Hello Larry"
        }
        // Binding in class constructor
        // this.clickHandler = this.clickHandler.bind(this);
    }


    // clickHandler () {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this);
    // }

    // As a class property with arrow functions
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* Binding in render */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
                {/* Arrow Function in render */}
                {/* <button onClick={() => this.clickHandler(this)}>Click Me!</button> */}
                <button onClick={this.clickHandler}>Click Me!</button>

            </div>
        )

    }
}

export default EventBind