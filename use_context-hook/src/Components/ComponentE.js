import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App';
import ComponentF from './ComponentF'

function ComponentE() {

    // Using Contexts with useContext
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <ComponentF />
            <div>{user}-{channel}</div>
        </div>
    )
}

export default ComponentE
