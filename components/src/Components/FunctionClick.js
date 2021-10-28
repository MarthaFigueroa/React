import React from "react";

const FunctionClick = (params)  =>{

    function clickHandler () {
        console.log("Button Clicked");
    }

    return(
        <div>
            <button onClick={() => clickHandler()}>Click</button>
        </div>
    )
}

export default FunctionClick;