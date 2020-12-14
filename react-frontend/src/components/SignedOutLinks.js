import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/signUp" className="nav-link right">SignUp</NavLink> </li>
                <li><NavLink to="/signin" className="nav-link">login</NavLink> </li>
                </ul>
            </div>
       </nav>
     </div>


    );
}


export default SignedOutLinks;