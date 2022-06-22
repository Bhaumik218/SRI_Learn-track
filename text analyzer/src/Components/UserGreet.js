import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

 class UserGreet extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLogged : false
       }
     }
  render() {

    return (
        this.state.isLogged ?
        <div> WElcome Bhand</div> :
        <div> WElcome guets</div>
    )
    
    //   let message
    //   if(this.state.isLogged) {
    //       message  = <div> Welcome Bhand</div>
    //   }

    //   else {
    //       message = <div>Welcome Gusets</div>
    //   }

    //   return <div>{message}</div> 

//       if(this.state.isLogged) {
//           return (
//               <div>
//                   Welcome BHand
//               </div>
//           )
//       }

//       else {
//           return(
//               <div>
//                   WElcome gests
//               </div>
//           )
//       }
    
   }
}

export default UserGreet