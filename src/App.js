import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/home';
import Login from './Componets/SignIn/login';
import SignUp from './Componets/SignUp/signup';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Employer from './Componets/Employer/employer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/employer' element={<Employer/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
