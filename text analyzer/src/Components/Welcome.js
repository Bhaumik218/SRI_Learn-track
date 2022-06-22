import React, { Component } from "react";

class Welcome extends Component {
    render(){
        const {name,heroname} = this.props
        return <h1>Hello from {name} aka {heroname}</h1>
    }
}

export default Welcome