import React from 'react'

const Hello = () => {
    // JSX Version
    return (
        <div id='Hello' className='dummyClass'>
            <h1>Hello Wishwas</h1>
        </div>
    )

    // Without JSX Version
    // return (
    //     React.createElement(
    //         'div', 
    //         {
    //             id: 'Hello', 
    //             className: 'dummyClass'
    //         }, 
    //         React.createElement('h1', null, "Hellos Wishwas"))
    // )
}

export default Hello