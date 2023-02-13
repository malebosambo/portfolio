import React, { Component } from 'react';

class Login extends Component {
  // State object is used to render dynamic data
  // state = {};
  
  // Use arrow functions if creating event handlers that have args
  
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button onClick="{}">Login</button>
        <p>To reset your password, please click <span>here</span></p>
      </div>
    );
  }
}

export default Login;