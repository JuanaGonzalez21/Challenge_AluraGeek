import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Category from './components/Category/Category';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/categoria/:id' element={<Category/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
