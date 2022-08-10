import React from 'react'

const Login = () => {
    return (
        <div>
            <header className="segment">
                <h1>Sign in to your SHIELD profile</h1>
                <h3>Sign in to your existing account</h3>
            </header>
            <section id="login-register" className="segment">
                <form className="form-control" action="">
                    <div className="inp">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="userid" />
                    </div>
                    <div className="inp">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <div className="inp show-passwd">
                            <input type="checkbox" name="show-passwd" id="show-passwd" />
                            <label for="show-passwd">Show password</label>
                        </div>
                    </div>
                    <div className="inp pref">
                        <a href="">Forgot Password?</a>
                        <div className="inp show-passwd">
                            <input type="checkbox" name="show-passwd" id="show-passwd" />
                            <label for="remember-me">Remember me</label>
                        </div>
                    </div>
                    <div className="inp">
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login