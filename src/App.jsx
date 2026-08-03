// --- Imports ---
import { useState, useEffect } from 'react' // React hooks for local state and lifecycle side effects
import { format } from 'date-fns'          // Formats Date objects into custom readable string patterns
import reactLogo from './assets/react.svg' // SVG asset import for React branding
import viteLogo from './assets/vite.svg'   // SVG asset import for Vite branding
import heroImg from './assets/hero.png'    // Image asset for hero banner
import './App.css'                         // Global styles specific to App component

function App() {
  // --- State Variables ---
  // Counter state (kept from boilerplate template)
  const [count, setCount] = useState(0)

  // Holds the current Date object; updated every second to drive the live clock
  const [time, setTime] = useState(new Date())

  // --- Side Effects ---
  useEffect(() => {
    // Start an interval timer that updates `time` state with a fresh Date object every 1,000ms (1 second)
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Cleanup function: runs automatically when the component unmounts to clear the interval
    // and prevent memory leaks/unnecessary state updates in the background
    return () => clearInterval(timer)
  }, []) // Empty dependency array ensures the timer setup runs only once when the component mounts

return (
    <>
      <p>Current time: {format(time, 'EEEE, MMMM do, yyyy - hh:mm:ss a')}</p>
    </>
  )
}

export default App
