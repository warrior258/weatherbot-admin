import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"


const App = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("user")){
      navigate('/')
    }
  }, [location.pathname])

  return (
    <>
      {location.pathname === "/home" || location.pathname === "/settings" ? <Sidebar/> : ''}
       
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}

export default App
