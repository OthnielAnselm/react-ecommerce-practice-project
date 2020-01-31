import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Othniel', 'Peter', 'Georgia']
    const nameList = names.map((name, index) => <h1 key={index}>{index} My name is {name}</h1>)
    return nameList
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Othniel',
    //         age: 25,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Peter',
    //         age: 27,
    //         skill: 'Javascript'
    //     },
    //     {
    //         id: 3,
    //         name: 'Georgia',
    //         age: 23,
    //         skill: 'Java'
    //     }
    // ]
    // const personList = persons.map(person => (
    //     <Person key={person.id} person={person}/>
    // ))

//     const personList = persons.map(person => (
//         <div key={person.id}>
//             <h2>My name is {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
//         </div>
//    ))

    // return personList

    // const names = ['Othniel', 'Peter', 'Georgia']
    // const nameList = names.map(name => <h1>{name}</h1>)
    // return (
    //     <div>{nameList}</div>
    // )

    // const names = ['Othniel', 'Peter', 'Georgia']
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
}

export default NameList
