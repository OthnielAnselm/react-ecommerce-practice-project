import React from 'react'

/* function Greet(){
    return <h1>Hello, Othniel</h1>
} */

/* const Greet = ({name, otherName}) => {
    
    return(
        <div>
            <h1>Hello {name} a.k.a {otherName}</h1>
            
        </div>
    ) 
} */

const Greet = props => {
    const {name, otherName} = props
    return(
        <div>
            <h1>Hello, {name} a.k.a {otherName}</h1>
            
        </div>
    ) 
}

export default Greet