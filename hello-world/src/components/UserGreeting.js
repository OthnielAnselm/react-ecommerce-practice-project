import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        //Conditional rendering using short-circuit(ing) method
        return (
            this.state.isLoggedIn && <div>Welcome, Othniel!</div>
        )

        //Conditional rendering using ternary operator
        // return(
        //     this.state.isLoggedIn ? <div>Welcome, Othniel!</div> : <div>Welcome, Guest!</div>
        // )
        
        //Conditional Rendering using a variable 
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome, Othniel!</div>
        // } else {
        //     message = <div>Welcome, Guest!</div>
        // }
        // return <div>{message}</div>

        //Conditional rendering using good ol' if-else statements
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome, Othniel!
        //         </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //             Welcome, Guest!
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //        <div>Welcome, Othniel!</div>
        //        <div>Welcome, Guest!</div>
        //     </div>
        // )
    }
}

export default UserGreeting
