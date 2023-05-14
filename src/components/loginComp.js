import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Login extends Component {
  // State object is used to render dynamic data
  // state = {};
  
  // Use arrow functions if creating event handlers that have args
  
  constructor(props) {
    super(props);
    
    this.state = {
      username : '', 
      password : ''
    }
    
  }
  
  onSubmit = (e) => {
    e.PreventDefault();
    
    console.log('Logging in started');
  }
  
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form role="form" onSubmit={(e) => this.onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
        <p>To reset your password, please click <span><Link to="/reset">here</Link></span></p>
      </div>
    );
  }
}

export default Login;