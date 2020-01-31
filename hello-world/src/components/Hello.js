import React from 'react'

const Hello = () => {
    /* return (
        <div className='dummyClass'>
            <h1>Hello, Othniel</h1>
        </div>
    ) */
    //This one works perfectly too!
    /* return React.createElement('div', null, <h1>Hello, Othniel!</h1>) */
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello, Othniel!'))
}

export default Hello