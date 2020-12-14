import React, { Component } from 'react'
import SignedInLinks from '../components/SignedInLinks'
import SignedOutLinks from '../components/SignedOutLinks'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
         <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">User Management App</a>
     <ul  className="navbar-nav mr-auto">
      <li>  <SignedInLinks></SignedInLinks> </li>
        
     </ul>
     <ul  className="nav navbar-nav navbar-right">
      <li> <SignedOutLinks></SignedOutLinks> </li>
       </ul>
     </nav>
     </div>
                       
        )
    }
}

export default HeaderComponent
