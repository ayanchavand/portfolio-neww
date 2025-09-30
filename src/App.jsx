import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './compopnents/Home'
import About from './compopnents/About'
import Projects from './compopnents/Projects'
import Navbar from './compopnents/Navbar'
import Footer from './compopnents/Footer'
import Experience from './compopnents/Experience'
import Games from './compopnents/Games'
import CustomCursor from './compopnents/CustomCursor'
import DefaultTransition from './compopnents/DefaultTransition'

function App() {
  const [count, setCount] = useState(0)

   return (
     <div className="font-sans text-gray-800">
      <DefaultTransition duration={1500} />
      <CustomCursor />
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <About />
      <Footer/>
    </div>
  )
}

export default App
