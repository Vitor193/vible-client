import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css'

function App() {
 
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        
      </Routes>
    </div>
  )
}

export default App
