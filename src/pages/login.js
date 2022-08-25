import React from 'react'
import '../scss/Login.scss'

const Login = () => {
  return (
    <div className='Login'>
      <div className='container'>
        <header className="segment login-header">
          <h1>Sign in to your SHIELD profile</h1>
          <h3>Sign in to your existing account</h3>
        </header>
        <section id="login-register" className="segment">
          <form className="form-control" action="/dashboard">
            <div className="inp">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="userid" />
            </div>
            <div className="inp">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <div className="inp show-passwd">
                <input type="checkbox" name="show-passwd" id="show-passwd" />
                <label htmlFor="show-passwd">Show password</label>
              </div>
            </div>
            <div className="inp pref">
              <a href="/">Forgot Password?</a>
              <div className="inp show-passwd">
                <input type="checkbox" name="show-passwd" id="forgot-passwd" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
            </div>
            <div className="inp">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login