
import './login.css'
const Login = () => {
    return (
        <div className="login-container" >
            <form className="card">
                <h1 className="login-title">Log In</h1>
                <div className="input-container">
                    <input type="email" placeholder="Email" className="login-input"/>
                    <input type="password" placeholder="Password" className="login-input"/>
                </div>
                <button className="login-button">Log In</button>
                <div className="forgot-password">Forgot password?</div>
            </form>
        </div>
    )
}

export default Login