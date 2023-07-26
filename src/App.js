import React,{createContext,useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { UserProfile } from './pages/UserProfile';
import ForgotForm from './components/LoginComponents/ForgotForm';
import RegisterForm from './components/LoginComponents/RegisterForm';
import Win from './pages/Win';
import Footer from './components/Footer';
import './App.css';
export const AppContext =  createContext();
function App() {
  const [Token,setToken] = useState("")
  const [toggle, setToggle] = useState(true)    
    const Toggle = () => {
                setToggle(!toggle)    
            }
  const [loginSuccess, setloginSuccess] = useState(false);
  return (
    <AppContext.Provider value={{loginSuccess,setloginSuccess,toggle,setToggle,Toggle,Token,setToken}}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/mine'element={<UserProfile />}></Route>
        <Route path='/win'element={<Win />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
        <Route path='/forgotPass' element={<ForgotForm />}></Route>
      </Routes>
      <Footer />
    </Router>
    </AppContext.Provider>
  );
}

export default App;
