import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
    <div >
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/users" className="nav-link right">Home</NavLink> </li> 
                  <li><NavLink to="/logout" className="nav-link">Logout</NavLink> </li> 
                </ul>
            </div>
       </nav>
     </div>
  );
}


export default SignedInLinks;