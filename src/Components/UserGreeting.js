import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    render() {

        // Just in case I want rendering only if it's true, otherwise it does nothing
        return this.state.isLoggedIn && <div>Welcome Wishwas</div>

        // return(
        //     this.state.isLoggedIn ?
        //         (<div>Welcome Wishwas</div>) :
        //         (<div>Welcome Guest</div>)
        // )
        
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Wishwas</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // Render Conditionals
        // if(this.state.isLoggedIn){
        //     return <div>Hello Wishwas</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Hello Wishwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
