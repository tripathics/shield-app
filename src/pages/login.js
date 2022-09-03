import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import '../scss/Login.scss'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()
  
  const handleChange = (event) => {
    const {name, value} = event.target
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const [ email, password ] = [event.target[0].value, event.target[1].value]
    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      if (userCredential) {
        navigate('/dashboard');
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
      } else {
        navigate('/login');
      }
    }).catch(error => {
      console.log(error)
      alert('Invalid username or password!');
    })
  }
  return (
    <div className='Login'>
      <div className='container'>
        <header className="segment login-header">
          <h1>Sign in to your SHIELD profile</h1>
          <h3>Sign in to your existing account</h3>
        </header>
        <section id="login-register" className="segment">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="userid" 
                autoComplete='off' 
                placeholder='someone@example.com'
                onChange={handleChange} 
                value={email} 
              />
            </div>
            <div className="inp">
              <label htmlFor="password">Password</label>
              <input type="password" 
                name="password" 
                id="password" 
                placeholder='**********' 
                value={password} 
                onChange={handleChange} 
              />
            </div>

            <div className='inp checks'>
              <div className="pref">
                  <input type="checkbox" name="remember-me" id="rememberMe" />
                  <label htmlFor="remember-me">Remember me</label>
              </div>
            </div>
            <div className="inp">
              <button type="submit" id='signinBtn'>Sign in</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Login