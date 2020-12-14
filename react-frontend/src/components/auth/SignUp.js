import React, { Component } from 'react'
import UserService from '../../services/UserService';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let user ={
                email : this.state.email,
                password : this.state.password,
                firstName : this.state.firstName,
                lastName : this.state.lastName 
              }
       UserService.createUser(user).then( res => {
       //after submitting signup you have to redirect in login form
                this.props.history.push('/signin');
                 
            });        
    }
  render() {
    return (
      <div className="container">
             <h2>Sign Up </h2>
  <form onSubmit={this.handleSubmit}>

  <div className="form-group" >
      <label htmlFor="email">Email</label>
            <input type="email"className="form-control" id='email' onChange={this.handleChange}  autoComplete="off" required={true}/>
    </div>
    
    <div className="form-group">
      <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id='password' onChange={this.handleChange}  autoComplete="off" required={true}/>
    </div>
    <div className="form-group">
     <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id='firstName' onChange={this.handleChange} autoComplete="off" required={true}/>
    </div>

    <div className="form-group">
       <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id='lastName' onChange={this.handleChange} autoComplete="off" required={true}/>
    </div>

    <button className="btn btn-primary">Submit</button>
  </form>
</div>
    )
  }
}

export default SignUp