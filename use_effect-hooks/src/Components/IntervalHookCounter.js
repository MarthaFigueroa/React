import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(initialState)

    const tick = () =>{
        setCount(count + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return() =>{
            clearInterval(interval)
        }
    }, [input])

    return (
        <div>
            
        </div>
    )
}

export default IntervalHookCounter
