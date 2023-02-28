import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import AddProject from './pages/Projects/AddProject';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/addproject' element={ <AddProject /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
