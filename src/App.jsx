import { Home } from './pages/Home'
import { useEffect, useState } from 'react'

import Portfolio from './pages/Portfolio'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  // h-[calc(100vh-60px)]
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='portfolio' element={<Portfolio />} />
    </Routes>
  )
}

export default App
