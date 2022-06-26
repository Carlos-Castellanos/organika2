// import logo from './logo.svg';
import './App.css';
// import 'botstrap/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <header className="App-header">
        <h1>Welcome to Organika store </h1>
        </header>
        <Catalog/>
      </main>

      <Footer />
    </div>
  );
}

export default App;

