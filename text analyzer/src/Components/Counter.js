import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }
    setCount() {
    //    this.setState({
    //        count: this.state.count +1
    //    }, 
    //    () => {
    //        console.log('CallBack value',this.state.count)
    //    }
    //    )
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
        console.log(this.state.count);
        
    }

    IncrementFive() {
        this.setCount()
        this.setCount()
    }
    render() {
        return(
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.IncrementFive()}>Incremenet</button>
            </div>
        ) 
    }
}

export default Counter;