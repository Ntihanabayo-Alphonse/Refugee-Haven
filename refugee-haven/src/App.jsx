import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageBanner from './components/PageBanner';
import Programs from './components/Programs';
import Donate from './components/Donate';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
