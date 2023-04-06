import React from "react";

function Login() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <Login className="Login1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit" align="center" href="Login">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="Reset">Forgot Password? </a>
        </p>
      </Login>
    </div>
  );
}

export default Login;