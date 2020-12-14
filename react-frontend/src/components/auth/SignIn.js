import React, { Component } from 'react';
import UserService from '../../services/UserService';

class SignIn extends Component {
  state = {
     email: '',
    password: '',
    user :{}
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
    //fetch it from backend based on email
    UserService.getUserByEmail(this.state.email).then( res => {
    console.log('backend Data'+res);
            this.setState({user: res.data});
        })
   console.log('backend email'+ this.state.user.email)
     if (this.state.user.email === this.state.email && this.state.user.password === this.state.user.password)
     {
        console.log('welcome');
        //after submitting signup you have to redirect in login form
                this.props.history.push('/');
     }
     else{
       console.log('wrong');
     }
  }
 render() {
    return (
        <div className="container">
             <h2>Login Form </h2>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
    </div>
    <div className="form-group">
       <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id='password' onChange={this.handleChange} />
    </div>
    <button  className="btn btn-primary">Login</button>
  </form>
</div>
    )
  }
}

export default SignIn