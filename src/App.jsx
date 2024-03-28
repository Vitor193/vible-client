import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NoteDetails from './pages/NoteDetails';
import EditNote from './pages/EditNote';
import Signup from './pages/Signup';
import Login from './pages/Login';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/notes" element= {<Notes/>} />
        <Route path="/notes/:noteId" element= {<NoteDetails/>} />
        <Route path="/notes/edit/:noteId" element= {<EditNote/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} />
      </Routes>
    </div>
  )
}

export default App;
