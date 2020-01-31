import React, { Component } from 'react'

/* class Welcome extends Component {
    render(){
        return(
            <div>
                <h1>Hi, {this.props.name}</h1>
                {this.props.children}
            </div>
        ) 
    }
} */

class Welcome extends Component {
    render(){
        const {name, otherName} = this.props
        // const {state1, state2} = this.state
        return(
            <div>
                <h1>Hi, {name} a.k.a {otherName}</h1>               
            </div>
        ) 
    }
}

export default Welcome