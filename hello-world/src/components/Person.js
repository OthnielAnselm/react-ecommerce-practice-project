import React from 'react'

function Person({person}) {
    return (
        
        <h2>My name is {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
        
    )
}

export default Person
