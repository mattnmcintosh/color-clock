import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

  return () => clearInterval(timer)
  }, [])

return (
    <>
      <p>Current time: {format(time, 'hh:mm:ss a')}</p>
    </>
  )
}

export default App
