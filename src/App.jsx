import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SwapForm from './components/SwapForm'

function App() {
  const [count, setCount] = useState(0)

 return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <SwapForm />
      </div>
    </div>
  );
}

export default App
