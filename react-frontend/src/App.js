import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
//import Demo from './components/Demo';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <div>
        <BrowserRouter>
              <HeaderComponent />
                <div className="container-fluid">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/users"  component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-users/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-users/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path='/signin' component={SignIn} />
                          <Route path='/signup' component={SignUp} />
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
             
        </BrowserRouter>
    </div>
    
  );
}

export default App;
