import './App.css';
import Navbar from './components/Navbar';
import Unitconvertor from './components/Unitconvertor';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Hello Anuj Bhati " />} />
          <Route path="/unitconvertor" element={<Unitconvertor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
