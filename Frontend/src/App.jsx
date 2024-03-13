// import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ProductDetailPage/:id" element={<ProductDetailPage/>} /> 
      </Routes>
  )
}

export default App