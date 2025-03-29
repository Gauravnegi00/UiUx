import { useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'
import CursorDot from './components/CursorDot' 

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-stone-200">
      <CursorDot />
      <Wrapper />
    </div>
  )
}

export default App
