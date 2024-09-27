import './nav_bar.css'

const  NavBar = () => {
    return (
        <div className="nav-container" >
        <div className="app-name">
            LocalJobs
        </div>
        <div className="signup-login-container">
            <div className="login">
                Login
            </div>
            <div className="sign-up">
                Sign Up
            </div>
        </div>
    </div>
    )
}

export default NavBar