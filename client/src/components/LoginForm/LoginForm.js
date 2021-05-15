import React from 'react';
import './index.css';
import logo from './TransparentFullLogo.png'
import LoginGoogle from '../Login/LoginGoogle'

function UserLogin() {
  return (
    <form>
      <h6 className="userLogin">Welcome Back!</h6>
      <div className="d-flex p-2 justify-content-center">
        <img src={logo} alt="" width="200" className="img-fluid" style={{position: "relative", top: "50px"}} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <div className="google">
      <LoginGoogle />
      </div>
    </form>
  )
}

export default UserLogin

