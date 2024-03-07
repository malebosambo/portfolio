import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <>
      <div>
        <h1>Login</h1><br/>
        <form onSubmit={() => this.onSubmit()}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>To reset your password, please click <span><Link to="/reset">here</Link></span></p>
      </div>
    </>
  )
}
