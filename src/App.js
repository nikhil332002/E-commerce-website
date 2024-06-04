import './App.css';
import Navbar from './assets/Navbar.js';
import './assets/style.css';
import Home from './assets/home.js';
import Orangeinfo from './assets/orange_info.js';
import Cart from './assets/Cart.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Orange_info' element={<Orangeinfo/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
