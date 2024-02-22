import React, { useEffect, useState }  from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x -13,
      y: mousePosition.y -8
    }
  }

  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  )
}
