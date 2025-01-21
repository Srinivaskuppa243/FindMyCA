import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Accountant from './components/Accountant'
import Details from './components/Details'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/accountant' element={<Accountant/>}/>
        <Route path='/accountant/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
