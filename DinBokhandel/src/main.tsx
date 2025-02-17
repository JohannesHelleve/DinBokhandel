import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import BookPage from './pages/BookPage'

import './index.css'
import HomePage from './pages/HomePage' 

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />  {/* Define routes here */}
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
