import React from "react";

const Hello = props => {
    const {name,heroname} = props
    return (
        <div>
            <p>Hello from {name} a.k.a {heroname}</p>
            {props.children}
        </div>
        
    )
}

export default Hello;