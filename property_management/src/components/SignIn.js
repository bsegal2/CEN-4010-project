import React from 'react'

function SignIn() {
  return (
    <form>
    <h3>Sign In</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter username"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p>
    <p className="text-right">
      New here? <a href="signup">Sign up!</a>
    </p>
    
  </form>
  )
}

export default SignIn