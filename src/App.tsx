import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </>
    
  )
}

export default App
