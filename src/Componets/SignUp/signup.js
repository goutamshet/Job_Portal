
import { useState } from 'react';
import './signup.css'
import {Link} from 'react-router-dom';

const SignUp = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[selectedOption, setSelectedOption] = useState("")

    return (
        <div className="signup-container" >
            <form className="card">
                <h1 className="signup-title">Sign Up</h1>
                <div className="input-container">
                    <input type="text" placeholder="Name " className="signup-input"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                    <input type="email" placeholder="Email" className="signup-input"
                     value={email}
                     onChange={(e) => {
                         setEmail(e.target.value)
                     }}/>
                    <input type="password" placeholder="Password" className="signup-input"
                     value={password}
                     onChange={(e) => {
                         setPassword(e.target.value)
                     }}/>
                </div>
                <div className="radio-selector-container">
                <input type="radio" value="Employer" name="seeker-employer" id="employer" className="radio-selector"
                checked = {selectedOption === 'Employer'}
                onChange={(e) => {
                    setSelectedOption(e.target.value)
                }}
                />
                <label htmlFor="employer" className="radio-label">Employer</label>
                <input type="radio" value="Seeker" name="seeker-employer" id="seeker" className="radio-selector"
                checked = {selectedOption === 'Employer'}
                onChange={(e) => {
                    setSelectedOption(e.target.value)
                }}/>
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