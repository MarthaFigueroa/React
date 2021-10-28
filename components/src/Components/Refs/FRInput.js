import React from 'react'

// Forwarding Refs input
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput
