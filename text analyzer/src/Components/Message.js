import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'welcome mc'
        }
    }

    changeMessage() {
        this.setState({
            message: 'nikal lavde'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={() => this.changeMessage() }>Subscribe</button>
            </div>
              
        )
    }
}

export default Message