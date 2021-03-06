import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition);
        
        return () =>{
            console.log("Component Unmounting");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []) //useEffect is called once, just when it render with an empty array, with no dependencies

    return (
        <div>
            X - {x}  Y - {y}
        </div>
    )
}

export default HookMouse
