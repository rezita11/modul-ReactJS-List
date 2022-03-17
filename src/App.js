import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import './App.css';

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div>
        <div className="flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide">
          <Link
            className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
            to="/about"
          >
            About
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </div>

        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
