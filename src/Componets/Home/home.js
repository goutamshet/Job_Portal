
import MainSection from "./MainSection/main"
import NavBar from "./HomeNavBar/nav_bar"
import Button from "./Button/button"

import './home.css'

const Home= () => {
    return (
        <div className="home">
            <NavBar/>
            <MainSection/>
            <Button buttonName = "Search Jobs"/>
        </div>
    )
}

export default Home