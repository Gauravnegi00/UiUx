import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './components/Wrapper'
import CursorDot from './components/CursorDot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="w-[100vw] h-[100vh] bg-white "  >
      <CursorDot />
      <Wrapper />
      
    </div>
  )
}

export default App
