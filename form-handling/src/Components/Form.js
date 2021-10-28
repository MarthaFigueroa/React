import React, { Component } from 'react'

export class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`Username: ${this.state.username}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        const { username, comments, topic } = this.state;

        const divStyle = {
            marginBottom: '10px',
            marginTop: '10px',
            color: 'blue'
        }

        const inputStyle = {
            marginLeft: '10px'
        }

        return (
            <form>
                <div style={divStyle}>
                    <label>Username</label>
                    <input style={inputStyle} type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div style={divStyle}>
                    <label>Comments</label>
                    <textarea style={inputStyle} value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div style={divStyle}>
                    <label>Topic</label>
                    <select style={inputStyle} value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
