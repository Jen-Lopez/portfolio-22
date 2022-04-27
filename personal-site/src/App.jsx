import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/work' element={<Work/>} exact/>
          <Route path='/work/food-with-friends' element={<ProjectDetails projectName='fwf'/>} />
          <Route path='/work/flix-box' element={<ProjectDetails projectName='flixbox'/>} />
          <Route path='/work/utrend' element={<ProjectDetails projectName='utrend'/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
