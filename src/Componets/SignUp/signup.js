
import './signup.css'
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-container" >
            <form className="card">
                <h1 className="signup-title">Sign Up</h1>
                <div className="input-container">
                    <input type="text" placeholder="Name" className="signup-input"/>
                    <input type="email" placeholder="Email" className="signup-input"/>
                    <input type="password" placeholder="Password" className="signup-input"/>
                </div>
                <div className="radio-selector-container">
                <input type="radio" value="Employer" name="seeker-employer" id="employer" className="radio-selector"/>
                <label htmlFor="employer" className="radio-label">Employer</label>
                <input type="radio" value="Seeker" name="seeker-employer" id="seeker" className="radio-selector"/>
                <label htmlFor="seeker" className="radio-label">Seeker</label>
                </div>
                <button className="signup-button">Sign Up</button>
                <div className="account-links">
                    <span className="text">Already have an account? &nbsp;</span> 
                    <Link className="login-link" to="/signin">Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp