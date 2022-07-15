// import logo from './logo.svg';
import './App.css';
// import 'botstrap/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import About from './components/about';
import Home from './components/home';
import Cart from './components/cart';
import Admin from './components/admin';
import GlobalState from './context/globalState';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </GlobalState>

    </div>
  );
}

export default App;

