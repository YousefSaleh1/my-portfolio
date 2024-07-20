import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './contexts/AppContext';
function App() {

  return (
    <>
      <AppProvider>
        <Navbar />
        <Routes >
          <Route path='/my-portfolio/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-portfolio/project/:id' element={<Project />} />
        </Routes>
      </AppProvider>
    </>

  )
}

export default App
