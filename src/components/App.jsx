import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='teacher' element={<Home/>} />
          <Route path='student' element={<Home/>} />
          <Route path='about-us' element={<AboutUs/>} />
          <Route path='contact-us' element={<ContactUs/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>

  )
}

export default App