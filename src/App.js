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

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
{/* 
            <header className="App-header"> */}
            <Route path='/' element={<Home/>}/>
            {/* </header> */}
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route element={<Admin/>} path="/admin" />
            <Route path='/about' element={<About/>} />

        </Routes>
        </main>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;

