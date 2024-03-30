import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NavbarComp from './components/Navbar';
import Footer from './components/Footer';
import NoteDetails from './pages/NoteDetails';
import EditNote from './pages/EditNote';
import Signup from './pages/Signup';
import Login from './pages/Login';
import User from './pages/User';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import './App.css';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


function App() {

  return (
    <div className='App'>
      <NavbarComp />

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/notes" element= {<IsPrivate><Notes/> </IsPrivate>} />
        <Route path="/notes/:noteId" element= {<IsPrivate><NoteDetails/></IsPrivate>} />
        <Route path="/notes/edit/:noteId" element= {<IsPrivate><EditNote/></IsPrivate>} />
        <Route path="/signup" element= {<IsAnon><Signup/></IsAnon>} />
        <Route path="/login" element= {<IsAnon><Login/> </IsAnon>} />
        <Route path="/user" element={<IsPrivate><User/></IsPrivate>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
