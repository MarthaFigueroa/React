import React, { Component } from 'react'
import MemoComp from '../MemoComponents/MemoComp'
import PureComponent from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Martha"
        }
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({
                name: "Martha2"
            })
        }, 2000)
    }

    render() {
        console.log("***********************Parent Comp Render***********************");
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                <RegularComp name={this.state.name} />
                <PureComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
