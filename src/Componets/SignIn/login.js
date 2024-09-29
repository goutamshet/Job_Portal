
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-container" >
            <form className="card">
                <h1 className="login-title">Log In</h1>
                <div className="input-container">
                    <input type="email" placeholder="Email" className="login-input"/>
                    <input type="password" placeholder="Password" className="login-input"/>
                </div>
                <div className="forgot-password">Forgot password?</div>
                <button className="login-button">Log In</button>
                <div className="account-links">
                    <span className="text">Don't have an account? &nbsp;</span> 
                    <Link className="signup-link" to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default Login