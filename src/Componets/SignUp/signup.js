
import './signup.css'
const SignUp = () => {
    return (
        <div className="signup-container" >
            <form className="card">
                <h1 className="signup-title">Sign Up</h1>
                <div className="input-container">
                    <input type="email" placeholder="Email" className="signup-input"/>
                    <input type="password" placeholder="Password" className="signup-input"/>
                </div>
                <div className="radio-selector-container">
                <input type="radio" value="Employer" name="seeker-employer" id="employer" className="radio-selector"/>
                <label htmlFor="employer" className="radio-label">Employer</label>
                <input type="radio" value="Seeker" name="seeker-employer" id="seeker" className="radio-selector"/>
                <label htmlFor="seeker" className="radio-label">Seeker</label>
                </div>
                <button className="signup-button">Log In</button>
                <div className="forgot-password">Forgot password?</div>
            </form>
        </div>
    )
}

export default SignUp