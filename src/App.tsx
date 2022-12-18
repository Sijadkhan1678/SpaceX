import React,{FC, Fragment} from 'react';
import './App.css';
import Launch from './components/launchdetails/Launch';
import Launches from './components/launches/Launches';
import Navbar from './components/layout/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/About';

const App:FC = () =>  {
  return (
    <BrowserRouter>    
    <Fragment>
      <Navbar />
      
    <div className="container">
    <Routes>
     
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      
       </Routes>
    </div>
   
    </Fragment>
    </BrowserRouter>

  );
}

export default App;
