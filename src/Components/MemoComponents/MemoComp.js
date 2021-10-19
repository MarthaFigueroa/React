import React from 'react'

function MemoComp({name}) {
    console.log("Rendering Memo Component");
    return (
        <div>
            {name}
        </div>
    )
}

// Not to re render this component
export default React.memo(MemoComp)
