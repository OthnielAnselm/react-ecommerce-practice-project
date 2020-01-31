import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked')
    }
    return (
        //When handling a clicked event, be sure to omit the parentheses "()" on the clickhandler;
        //as this would make it a function call, and the clicked event won't be handled.
        //use the function name only. 
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick



