import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './component/Navbar';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/work' element={<Work/>} exact/>
          <Route path='/resume' element={<Resume/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
