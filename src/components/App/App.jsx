import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from "../../views/Home"
import Contact from '../../views/Contact';


function App() {
  
  return (
    <>
      <div className="App">
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="contact" element={<Contact />} />
      </Routes>
      
    </div>

  </>
  )
}

export default App
