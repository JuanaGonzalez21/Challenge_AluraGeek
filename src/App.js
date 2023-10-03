import './App.css'
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Category from './components/Category/Category';

const App = () => {
  return (
    <>

    <Navbar/>
    <Home/>
    {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={}></Route>
        <Route path='/categoria/:id' element={<Category/>}></Route>
      </Routes>
    </Router> */}
    
    </>
  );
}

export default App;
