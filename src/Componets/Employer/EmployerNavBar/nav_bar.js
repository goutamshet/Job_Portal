import './nav_bar.css'
import {Link} from 'react-router-dom'
import profile from '../../../Assets/profile.png'

const  NavBar = () => {
    return (
        <div className="nav-container" >
            <div className="app-name">
                LocalJobs
            </div>
            <div className="nav-items-container">
                <Link to="/post-job" className="link">
                    <button className="button-post-job">Post Job</button>
                </Link>
                <div className="profile-container">
                    <span className="account-type">Employer</span>
                    <img  className="profile" src={profile}/>
                </div>
            </div>
    </div>
    )
}

export default NavBar