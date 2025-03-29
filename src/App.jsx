import { useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'
// import CursorDot from './components/CursorDot' // Uncomment if needed

function App() {
  return (
    <div className="w-[100vw] bg-white overflow-x-hidden">
      {/* <CursorDot /> */}
      <Wrapper />
    </div>
  )
}

export default App
