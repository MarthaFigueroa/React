// don't do this, just use https://reach.tech/dialog
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// const modalRoot = document.getElementById('modal-root')

// function Modal(props){
class Modal extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            showModal: false
        }
    }

    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => {
        this.setState({showModal: false})
        console.log(this.state.showModal);
    }
    
    render(){
        return (
            <div
                style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
                }}
                onClick={this.handleShowMessageClick}
            >
                <div
                style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '2px',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '300px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center',
                }}
                >
                HOLA
                <hr />
                <button onClick={this.handleCloseModal}>Close</button>
                </div>
            </div>
            )
        }
    }
export default Modal