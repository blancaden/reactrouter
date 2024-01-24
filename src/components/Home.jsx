
import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
       
      <h1>esto es el HOME</h1> 
      <Link to="Contact">Haz clic para ver la página CONTACT</Link>

    </div>
  )
}

export default Home