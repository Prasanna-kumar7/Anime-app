import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/Navbar.jsx'
import App from './App.jsx'
import Hero from './Hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
