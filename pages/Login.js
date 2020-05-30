import React from "react";

function Login() {
  return (
    <div className="form-container">
      <form action="" className="form-box">
        <h1 className="form-title">Log in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
