import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup /> }/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
